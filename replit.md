# Project Overview

## Overview

This is a personal portfolio website for William Arvin Fisilo, a software engineer specializing in AI, autonomous systems, and marine automation. The application is built as a full-stack web application with a modern React frontend and Express backend, designed to showcase professional experience, projects, and technical skills in an interactive and visually appealing way.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development patterns
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with a custom dark space theme and CSS variables for consistent theming
- **UI Components**: Extensive use of Radix UI primitives with shadcn/ui component library for accessible, customizable components
- **State Management**: TanStack React Query for server state management and caching
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Framework**: Express.js with TypeScript running on Node.js
- **API Design**: RESTful API structure with `/api` prefix for all endpoints
- **Storage Layer**: Abstracted storage interface with in-memory implementation (MemStorage) that can be easily swapped for database implementations
- **Development**: Hot reload and middleware for request logging and error handling

### Data Storage Solutions
- **Database ORM**: Drizzle ORM configured for PostgreSQL with migration support
- **Connection**: Neon Database serverless PostgreSQL via `@neondatabase/serverless`
- **Schema**: User management schema with UUID primary keys and Zod validation
- **Current State**: In-memory storage implementation with database infrastructure ready for deployment

### Authentication and Authorization
- **Session Management**: Connect-pg-simple for PostgreSQL-based session storage (configured but not yet implemented)
- **User Schema**: Prepared with username/password structure using Drizzle ORM
- **Current State**: Authentication infrastructure is set up but not actively used in the portfolio application

### Frontend Design System
- **Component Library**: Custom-themed shadcn/ui components with Radix UI primitives
- **Typography**: Multi-font system including Inter (sans), Georgia (serif), Menlo (mono), and Kalam (handwriting)
- **Color Palette**: Space-themed dark design with electric purple, neon blue, and pink accents
- **Animations**: Intersection Observer-based animations for scroll-triggered effects
- **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints

### Development and Build Process
- **Development**: Concurrent frontend (Vite) and backend (tsx) servers with hot reload
- **Build**: Vite for frontend bundling and esbuild for backend compilation
- **Type Checking**: Shared TypeScript configuration across client, server, and shared modules
- **Path Aliases**: Configured for clean imports with `@/` for client components and `@shared/` for shared types

### Project Structure
- **Client**: React application with component-based architecture, custom hooks, and page routing
- **Server**: Express backend with modular route handling and storage abstraction
- **Shared**: Common TypeScript types and database schemas shared between frontend and backend
- **Build Output**: Separate client and server build processes with static asset optimization

## External Dependencies

### Core Technologies
- **React Ecosystem**: React 18, React DOM, TanStack React Query for state management
- **Backend Framework**: Express.js with middleware for JSON parsing, CORS, and request logging
- **Database**: Drizzle ORM with PostgreSQL dialect, Neon Database serverless driver
- **Build Tools**: Vite for frontend bundling, esbuild for backend compilation

### UI and Styling
- **Component Libraries**: Extensive Radix UI primitives collection for accessible components
- **Styling Framework**: Tailwind CSS with PostCSS and Autoprefixer
- **Icons**: Lucide React icons, Font Awesome for social media icons
- **Fonts**: Google Fonts integration (Inter, Kalam) loaded via CDN

### Development Tools
- **TypeScript**: Full TypeScript setup with strict configuration
- **Validation**: Zod for runtime type validation and schema creation
- **Date Handling**: date-fns for date manipulation and formatting
- **Utilities**: clsx and class-variance-authority for conditional styling, nanoid for ID generation

### Replit Integration
- **Development**: Replit-specific Vite plugins for error overlay and cartographer integration
- **Banner**: Replit development banner script for external environment detection

### Session and Security
- **Session Storage**: connect-pg-simple for PostgreSQL session management
- **Carousel**: Embla Carousel React for image/content carousels
- **Form Handling**: React Hook Form with Hookform resolvers for form validation