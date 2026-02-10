# EcoTrack – Community Tool Sharing Marketplace

A UI-only Next.js prototype for a community tool sharing platform where users can rent tools from neighbors, save money, and reduce waste.

## Project Overview

EcoTrack is a tool sharing marketplace that connects community members to share tools and equipment. This is a **UI-only prototype** with no backend functionality - perfect for demonstrating the user interface and user experience.

## Features

- **Home Page**: Landing page with value propositions and call-to-action
- **Authentication**: Sign in and sign up forms (UI only)
- **Tool Search**: Browse and search available tools with filters
- **Tool Details**: View detailed information about tools including images, specifications, and owner info
- **Booking System**: Interactive booking status component (UI only)
- **User Profile**: User dashboard for managing listings and bookings
- **Add Tool**: Form for listing new tools (UI only)

## Technology Stack

- **Framework**: Next.js 16 with App Router
- **Language**: JavaScript (no TypeScript)
- **Styling**: Inline styles only (no CSS frameworks)
- **Components**: React functional components with hooks
- **Icons**: Inline SVG icons
- **Images**: Placeholder images from Picsum

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
ecotrack/
├── app/                    # Next.js App Router pages
│   ├── auth/              # Authentication pages
│   │   ├── sign-in/
│   │   └── sign-up/
│   ├── tools/             # Tool-related pages
│   │   └── [id]/         # Dynamic tool details page
│   ├── add-tool/          # Add new tool page
│   ├── bookings/          # User bookings page
│   ├── get-started/       # Getting started page
│   ├── profile/           # User profile page
│   ├── search/            # Tool search page
│   ├── layout.jsx         # Root layout
│   └── page.jsx          # Home page
├── components/             # Reusable UI components
│   ├── Navbar.jsx         # Navigation component
│   ├── ToolCard.jsx       # Tool card component
│   └── BookingStatus.jsx # Booking status component
├── public/                # Static assets
└── package.json           # Dependencies and scripts
```

## Key Design Decisions

- **No CSS Frameworks**: Uses only inline styles for maximum portability
- **No Backend**: All forms and interactions are UI-only demonstrations
- **Minimal Dependencies**: Only essential Next.js and React dependencies
- **Responsive Design**: Mobile-first approach with inline media queries where needed
- **Accessibility**: Semantic HTML5 elements with proper ARIA labels

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Pages

1. **Home** (`/`) - Landing page with hero section and features
2. **Get Started** (`/get-started`) - Onboarding page for new users
3. **Sign In** (`/auth/sign-in`) - User login form
4. **Sign Up** (`/auth/sign-up`) - User registration form
5. **Search** (`/search`) - Tool browsing with filters
6. **Tool Details** (`/tools/[id]`) - Individual tool information
7. **Add Tool** (`/add-tool`) - Form to list new tools
8. **Bookings** (`/bookings`) - User's booking history
9. **Profile** (`/profile`) - User profile and settings

## Components

- **Navbar**: Responsive navigation with mobile menu toggle
- **ToolCard**: Reusable card for displaying tool information
- **BookingStatus**: Status badge component with different states

## Notes

- This is a frontend-only prototype
- All form submissions show alerts instead of actual functionality
- Images use placeholder services (Picsum)
- No external CSS or styling libraries
- Focus on clean, semantic HTML and accessibility
