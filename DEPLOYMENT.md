# VaultShield Deployment Guide

## Overview

This guide provides comprehensive instructions for deploying VaultShield to various platforms, with a focus on security and scalability.

## Prerequisites

- Node.js 18+ installed
- Git configured
- Web3 wallet (MetaMask recommended)
- Deployment platform account (Vercel, Netlify, etc.)

## Environment Setup

### Required Environment Variables

Create a `.env` file with the following variables:

```env
# Network Configuration
NEXT_PUBLIC_CHAIN_ID=11155111
NEXT_PUBLIC_RPC_URL=https://sepolia.infura.io/v3/YOUR_INFURA_KEY

# Wallet Configuration
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=YOUR_WALLET_CONNECT_PROJECT_ID

# Contract Addresses
NEXT_PUBLIC_VAULT_CONTRACT_ADDRESS=YOUR_CONTRACT_ADDRESS
NEXT_PUBLIC_ORACLE_CONTRACT_ADDRESS=YOUR_ORACLE_ADDRESS
```

### Security Considerations

- Never commit `.env` files to version control
- Use environment-specific configurations
- Rotate API keys regularly
- Implement proper access controls

## Vercel Deployment

### Step 1: Prepare Repository

```bash
# Ensure all changes are committed
git add .
git commit -m "Prepare for deployment"
git push origin main
```

### Step 2: Connect to Vercel

1. Visit [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "New Project"
4. Select your repository
5. Click "Import"

### Step 3: Configure Build Settings

Vercel will auto-detect the following settings:
- **Framework**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### Step 4: Set Environment Variables

In Vercel dashboard:
1. Go to Project Settings
2. Navigate to Environment Variables
3. Add all required variables
4. Save configuration

### Step 5: Deploy

1. Click "Deploy" button
2. Wait for build completion
3. Access your application at the provided URL

## Alternative Deployment Options

### Netlify Deployment

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the project
npm run build

# Deploy to Netlify
netlify deploy --prod --dir=dist
```

### Docker Deployment

```dockerfile
FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "run", "preview"]
```

### Self-Hosted Deployment

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Serve with a web server
npx serve dist
```

## Performance Optimization

### Build Optimization

```javascript
// vite.config.ts
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          wallet: ['@rainbow-me/rainbowkit', 'wagmi'],
          crypto: ['@zama-fhe/oracle-solidity']
        }
      }
    }
  }
});
```

### CDN Configuration

- Enable gzip compression
- Configure caching headers
- Use CDN for static assets
- Implement lazy loading

## Security Best Practices

### Environment Security

1. **API Key Management**
   - Use environment variables
   - Rotate keys regularly
   - Implement key versioning

2. **Access Control**
   - Implement proper authentication
   - Use HTTPS everywhere
   - Configure CORS properly

3. **Data Protection**
   - Encrypt sensitive data
   - Implement proper logging
   - Regular security audits

### Network Security

```javascript
// Security headers configuration
const securityHeaders = [
  {
    key: 'X-Frame-Options',
    value: 'DENY'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin'
  }
];
```

## Monitoring and Analytics

### Performance Monitoring

```javascript
// Add performance monitoring
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

getCLS(console.log);
getFID(console.log);
getFCP(console.log);
getLCP(console.log);
getTTFB(console.log);
```

### Error Tracking

```javascript
// Error boundary implementation
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught:', error, errorInfo);
  }
}
```

## Troubleshooting

### Common Issues

1. **Build Failures**
   - Check Node.js version compatibility
   - Verify all dependencies are installed
   - Review build logs for specific errors

2. **Environment Variables**
   - Ensure all required variables are set
   - Check variable naming conventions
   - Verify variable values are correct

3. **Network Issues**
   - Verify RPC endpoint accessibility
   - Check firewall configurations
   - Test network connectivity

### Debug Mode

```bash
# Enable debug logging
DEBUG=vaultshield:* npm run dev

# Verbose build output
npm run build -- --verbose
```

## Maintenance

### Regular Updates

- Keep dependencies updated
- Monitor security advisories
- Review and update configurations
- Test deployment procedures

### Backup Strategy

- Regular code backups
- Environment configuration backups
- Database backups (if applicable)
- Disaster recovery planning

## Support

For deployment issues:

- Check the [troubleshooting guide](docs/troubleshooting.md)
- Review [common issues](docs/common-issues.md)
- Contact support team
- Join community discussions

## Next Steps

After successful deployment:

1. Configure monitoring
2. Set up analytics
3. Implement security measures
4. Plan for scaling
5. Regular maintenance schedule
