# Product Design Document
## CodeTime: VSCode-Based Code Walkthrough and Playback Teaching Tool

---

### **Project Information**
- **Product Name**: CodeTime
- **Team**: Impact Engineers  
- **Team Members**: Sterling Hardy, Dhanush Reddy, Sai Teja Reddy, Vineeth Reddy, Lucas Lira
- **Project Sponsor**: Jacob Hochstelter
- **Document Version**: 0.4
- **Last Updated**: November 8, 2025

---

## **Revision History**

| Revision | Date | Summary of Changes | Author(s) |
|----------|------|-------------------|-----------|
| 0.1 | 10/01/2025 | Designed the base form of this document with the project's requirements | Impact Engineers |
| 0.2 | 10/05/2025 | Updated diagrams and architecture in the document | Impact Engineers |
| 0.3 | 10/08/2025 | Summarized and refined sections of the document | Impact Engineers |
| 0.4 | 11/08/2025 | Enhanced document with detailed architecture, technical specifications, and implementation roadmap | Impact Engineers |

---

## **Executive Summary**

CodeTime is an innovative Visual Studio Code extension designed to revolutionize code-focused teaching and learning. The platform enables instructors to create interactive code walkthroughs with multimedia annotations and Git commit playback functionality, while providing students with an engaging, self-paced learning experience enhanced by AI-powered assistance.

### **Key Value Propositions**
- **Interactive Learning**: Transform static code into dynamic, multimedia learning experiences
- **Git Integration**: Leverage existing version control workflows for educational content
- **AI Enhancement**: Provide contextual explanations and on-demand assistance
- **Scalable Architecture**: Support both individual learning and classroom environments

---

## **System Architecture Overview**

### **Architecture Pattern: Three-Tier Client-Server Model**

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Presentation  │    │    Business     │    │      Data       │
│      Tier       │    │     Logic       │    │      Tier       │
│                 │    │      Tier       │    │                 │
│  VS Code        │◄──►│   FastAPI       │◄──►│   PostgreSQL    │
│  Extension      │    │   Backend       │    │   Database      │
│                 │    │                 │    │                 │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

---

## **Detailed Component Specifications**

### **1. Presentation Tier: VS Code Extension**

#### **Core Modules:**
- **Annotation Manager**: Handle creation, editing, and display of multimedia annotations
- **Timeline Controller**: Manage Git commit navigation and playback
- **Media Recorder**: Capture and store audio/video annotations
- **Webview Interface**: Custom UI for timeline scrubber and controls
- **LLM Integration**: Interface with AI services for code explanations

#### **Technical Specifications:**
- **Framework**: VS Code Extension API
- **Languages**: TypeScript, HTML, CSS
- **UI Components**: Custom webview panels, tree views, status bar items
- **Local Storage**: File-based metadata using VS Code workspace settings

### **2. Business Logic Tier: FastAPI Backend**

#### **API Endpoints:**
```
Authentication & User Management:
├── POST /auth/login
├── POST /auth/register
└── GET /auth/profile

Walkthrough Management:
├── POST /walkthroughs/create
├── GET /walkthroughs/{id}
├── PUT /walkthroughs/{id}
├── DELETE /walkthroughs/{id}
└── GET /walkthroughs/user/{user_id}

Annotation Management:
├── POST /annotations/create
├── GET /annotations/walkthrough/{walkthrough_id}
├── PUT /annotations/{id}
└── DELETE /annotations/{id}

Media Storage:
├── POST /media/upload
├── GET /media/{file_id}
└── DELETE /media/{file_id}

Git Integration:
├── POST /git/parse-repository
├── GET /git/commits/{repo_id}
└── GET /git/diff/{commit_id}

LLM Services:
├── POST /ai/explain-code
├── POST /ai/generate-summary
└── GET /ai/models/available
```

#### **Service Layer Architecture:**
- **Authentication Service**: JWT-based user authentication and authorization
- **Walkthrough Service**: CRUD operations for walkthrough management
- **Media Service**: File upload, storage, and retrieval with cloud integration
- **Git Service**: Repository analysis and commit history processing
- **AI Service**: LLM integration for code explanations and assistance

### **3. Data Tier: PostgreSQL Database**

#### **Database Schema:**

```sql
-- User Management
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(20) DEFAULT 'student',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Repository Information
CREATE TABLE repositories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    git_url VARCHAR(255),
    local_path VARCHAR(255),
    owner_id INTEGER REFERENCES users(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Walkthrough Sessions
CREATE TABLE walkthroughs (
    id SERIAL PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    description TEXT,
    repository_id INTEGER REFERENCES repositories(id),
    instructor_id INTEGER REFERENCES users(id),
    is_published BOOLEAN DEFAULT FALSE,
    access_level VARCHAR(20) DEFAULT 'private',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Git Commit Tracking
CREATE TABLE commits (
    id SERIAL PRIMARY KEY,
    repository_id INTEGER REFERENCES repositories(id),
    commit_hash VARCHAR(40) NOT NULL,
    commit_message TEXT,
    author_name VARCHAR(100),
    commit_date TIMESTAMP,
    parent_commit_hash VARCHAR(40)
);

-- Multimedia Annotations
CREATE TABLE annotations (
    id SERIAL PRIMARY KEY,
    walkthrough_id INTEGER REFERENCES walkthroughs(id),
    commit_id INTEGER REFERENCES commits(id),
    file_path VARCHAR(255),
    line_number INTEGER,
    annotation_type VARCHAR(20), -- 'text', 'audio', 'video'
    content TEXT,
    media_url VARCHAR(255),
    duration_seconds INTEGER,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Student Progress Tracking
CREATE TABLE user_progress (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    walkthrough_id INTEGER REFERENCES walkthroughs(id),
    current_commit_id INTEGER REFERENCES commits(id),
    completion_percentage DECIMAL(5,2) DEFAULT 0.00,
    last_accessed TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## **Design Rationale & Technology Decisions**

### **Architecture Choice: Three-Tier Model**
Our team selected a three-tier architecture for the following strategic reasons:

1. **Separation of Concerns**: Clear boundaries between presentation, business logic, and data management
2. **Scalability**: Independent scaling of each tier based on demand
3. **Maintainability**: Modular design allows for easier debugging and feature additions
4. **Team Collaboration**: Different team members can work on different tiers simultaneously
5. **Future-Proofing**: Easy integration with cloud services and third-party tools

### **Technology Stack Justification**

#### **Frontend: VS Code Extension (TypeScript)**
- **Familiarity**: Direct integration with developer workflows
- **Rich API**: Comprehensive extension capabilities for Git, file management, and UI
- **Cross-Platform**: Works on Windows, macOS, and Linux
- **Community**: Large ecosystem of existing extensions for reference

#### **Backend: FastAPI (Python)**
- **Performance**: High-performance async capabilities
- **Documentation**: Automatic API documentation generation
- **Type Safety**: Built-in support for type hints and validation
- **Team Expertise**: Strong Python experience across the team
- **Ecosystem**: Rich libraries for AI/ML integration

#### **Database: PostgreSQL**
- **Reliability**: ACID compliance and robust transaction support
- **Scalability**: Excellent performance with large datasets
- **JSON Support**: Native JSON handling for flexible annotation storage
- **Team Experience**: Familiar SQL interface and management tools
- **Open Source**: No licensing costs and strong community support

---

## **User Experience Design**

### **Instructor Mode Workflow**
1. **Project Setup**: Initialize walkthrough project with Git repository
2. **Recording Phase**: Navigate through commits while adding annotations
3. **Content Creation**: Record audio/video explanations for key code sections
4. **Review & Edit**: Preview walkthrough and refine content
5. **Publishing**: Share walkthrough with students via access controls

### **Student Mode Workflow**
1. **Access Walkthrough**: Open published walkthrough in VS Code
2. **Interactive Learning**: Use timeline scrubber to navigate commits
3. **Multimedia Content**: View/listen to instructor annotations
4. **AI Assistance**: Get explanations for unclear code sections
5. **Progress Tracking**: Resume from last position and track completion

### **Key UI Components**

#### **Timeline Scrubber Interface**
```
Commit Timeline:
[●────●────●────●────●] 
 A    B    C    D    E
 
Controls: [⏮] [⏯] [⏭] [🔊] [⚙]
Progress: Commit C of 5 (60% complete)
```

#### **Annotation Panel**
- **Text Annotations**: Markdown-formatted explanations
- **Media Player**: Embedded audio/video with playback controls
- **AI Chat**: Contextual code explanation interface
- **Navigation**: Quick jump to specific annotations

---

## **Security & Privacy Considerations**

### **Data Protection**
- **Encryption**: All media files encrypted at rest and in transit
- **Authentication**: JWT-based authentication with refresh tokens
- **Authorization**: Role-based access control for instructors and students
- **Privacy**: Optional anonymous mode for sensitive codebases

### **Compliance**
- **FERPA**: Educational record privacy compliance
- **GDPR**: European data protection regulation adherence
- **Local Storage**: Option for fully offline operation

---

## **Performance & Scalability**

### **Optimization Strategies**
- **Lazy Loading**: Load annotations and media on-demand
- **Caching**: Redis integration for frequently accessed data
- **CDN**: Media file delivery optimization
- **Database Indexing**: Optimized queries for large repositories

### **Scalability Metrics**
- **Target Users**: 1,000+ concurrent users
- **Repository Size**: Up to 10GB per walkthrough
- **Media Storage**: 100GB+ of annotations per instance
- **Response Time**: <200ms API response time

---

## **Implementation Roadmap**

### **Phase 1: Core Foundation (Weeks 1-4)**
- [ ] VS Code extension scaffolding
- [ ] Basic Git integration
- [ ] FastAPI backend setup
- [ ] PostgreSQL schema implementation
- [ ] User authentication system

### **Phase 2: Essential Features (Weeks 5-8)**
- [ ] Annotation creation and display
- [ ] Timeline scrubber functionality
- [ ] Basic media recording
- [ ] Instructor/student mode switching
- [ ] Local file storage

### **Phase 3: Advanced Features (Weeks 9-12)**
- [ ] LLM integration for code explanations
- [ ] Enhanced media management
- [ ] Progress tracking system
- [ ] Publishing and sharing capabilities
- [ ] Performance optimizations

### **Phase 4: Polish & Deployment (Weeks 13-16)**
- [ ] User interface refinement
- [ ] Comprehensive testing
- [ ] Documentation creation
- [ ] Deployment automation
- [ ] Beta user feedback integration

---

## **Risk Assessment & Mitigation**

| Risk | Impact | Probability | Mitigation Strategy |
|------|--------|-------------|-------------------|
| Git Integration Complexity | High | Medium | Early prototyping and thorough Git API research |
| Media Storage Scaling | Medium | High | Implement CDN and compression early |
| LLM API Rate Limits | Medium | Medium | Implement caching and fallback explanations |
| User Adoption | High | Low | Focus on intuitive UX and comprehensive documentation |
| Performance Issues | Medium | Medium | Regular performance testing and optimization |

---

## **Success Metrics**

### **Technical Metrics**
- API response time: <200ms average
- Extension startup time: <2 seconds
- Media loading time: <5 seconds
- Database query performance: <100ms

### **User Experience Metrics**
- User engagement: >80% walkthrough completion rate
- Instructor adoption: >50% of target instructors create content
- Student satisfaction: >4.5/5 user rating
- Feature utilization: >70% of features actively used

---

## **Future Enhancements**

### **Version 2.0 Considerations**
- **Collaborative Editing**: Multiple instructors per walkthrough
- **Live Sessions**: Real-time walkthrough broadcasting
- **Advanced Analytics**: Learning pattern analysis
- **Mobile Companion**: Tablet/phone annotation viewing
- **Integration Hub**: Connect with learning management systems

### **Long-term Vision**
- **Marketplace**: Platform for sharing and monetizing walkthroughs
- **AI Generation**: Automatic walkthrough creation from code changes
- **Multi-Language**: Support for additional programming languages
- **Enterprise Features**: Advanced administration and reporting tools

---

## **Conclusion**

The CodeTime platform represents a significant advancement in code-based education technology. By combining the familiar VS Code environment with innovative multimedia annotations and AI assistance, we create a powerful tool that bridges the gap between static documentation and interactive learning experiences.

Our three-tier architecture provides the foundation for a scalable, maintainable system that can grow with user needs while maintaining performance and reliability. The careful selection of technologies ensures both immediate productivity and long-term viability.

Through systematic implementation of the outlined phases, CodeTime will deliver a transformative educational experience that enhances both teaching effectiveness and student engagement in programming education.

---

**Document Status**: Draft for Review  
**Next Review Date**: November 15, 2025  
**Approval Required**: Project Sponsor, Technical Lead, Team Members
