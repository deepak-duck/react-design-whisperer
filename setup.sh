
#!/bin/bash

# Akcess Design Project Setup Script
# This script helps set up and run the Akcess Design website project

# Terminal colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
NC='\033[0m' # No Color

# Print fancy header
echo -e "${YELLOW}====================================================${NC}"
echo -e "${YELLOW}       AKCESS DESIGN PROJECT SETUP SCRIPT           ${NC}"
echo -e "${YELLOW}====================================================${NC}"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ Node.js is not installed!${NC}"
    echo -e "${BLUE}Please install Node.js from https://nodejs.org${NC}"
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d 'v' -f 2)
echo -e "${GREEN}✅ Node.js ${NODE_VERSION} detected${NC}"

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo -e "${RED}❌ npm is not installed!${NC}"
    exit 1
fi

# Check npm version
NPM_VERSION=$(npm -v)
echo -e "${GREEN}✅ npm ${NPM_VERSION} detected${NC}"
echo ""

# Ask if user wants to create a new directory
read -p "Create a new directory for the project? (y/n): " CREATE_DIR
if [[ $CREATE_DIR == "y" || $CREATE_DIR == "Y" ]]; then
    read -p "Enter directory name: " DIR_NAME
    mkdir -p "$DIR_NAME"
    cd "$DIR_NAME"
    echo -e "${GREEN}✅ Created and moved to directory: ${BLUE}$(pwd)${NC}"
    echo ""
fi

# Clone repository if needed
read -p "Clone from Git repository? (y/n): " CLONE_REPO
if [[ $CLONE_REPO == "y" || $CLONE_REPO == "Y" ]]; then
    read -p "Enter Git repository URL: " REPO_URL
    echo -e "${YELLOW}Cloning repository...${NC}"
    git clone "$REPO_URL" .
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✅ Repository cloned successfully${NC}"
    else
        echo -e "${RED}❌ Failed to clone repository${NC}"
        exit 1
    fi
fi

echo ""
echo -e "${YELLOW}Installing dependencies...${NC}"
npm install

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Dependencies installed successfully${NC}"
else
    echo -e "${RED}❌ Failed to install dependencies${NC}"
    exit 1
fi

# Check if TypeScript is installed globally, if not, install it
if ! command -v tsc &> /dev/null; then
    echo ""
    echo -e "${YELLOW}Installing TypeScript globally...${NC}"
    npm install -g typescript
    
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✅ TypeScript installed globally${NC}"
    else
        echo -e "${RED}❌ Failed to install TypeScript globally${NC}"
        echo -e "${YELLOW}This is not critical, continuing...${NC}"
    fi
fi

# Create .env file if needed
if [ ! -f .env ]; then
    echo ""
    read -p "Create .env file? (y/n): " CREATE_ENV
    if [[ $CREATE_ENV == "y" || $CREATE_ENV == "Y" ]]; then
        echo "# Environment Variables" > .env
        echo -e "${GREEN}✅ Created .env file${NC}"
    fi
fi

echo ""
echo -e "${BLUE}Project setup complete!${NC}"
echo ""
echo -e "${YELLOW}====================================================${NC}"
echo -e "${GREEN}  🚀 Ready to start the development server?${NC}"
echo -e "${YELLOW}====================================================${NC}"
read -p "Start development server now? (y/n): " START_SERVER

if [[ $START_SERVER == "y" || $START_SERVER == "Y" ]]; then
    echo ""
    echo -e "${PURPLE}Starting development server...${NC}"
    echo -e "${BLUE}The app will be available at ${GREEN}http://localhost:8080${NC}"
    echo -e "${YELLOW}Press Ctrl+C to stop the server${NC}"
    echo ""
    npm run dev
else
    echo ""
    echo -e "${BLUE}To start the development server later, run:${NC}"
    echo -e "${GREEN}npm run dev${NC}"
    echo ""
    echo -e "${YELLOW}Happy coding! 🎨✨${NC}"
fi

exit 0
