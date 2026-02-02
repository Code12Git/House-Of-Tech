# GitHub Secrets Setup Guide

## 🔐 Required GitHub Secrets for CI/CD

Before pushing, you need to add these secrets to your GitHub repository.

## Step-by-Step Instructions

### 1. Go to Your Repository Settings

1. Navigate to: https://github.com/Code12Git/House-Of-Tech
2. Click on **Settings** tab
3. In the left sidebar, click **Secrets and variables** → **Actions**

### 2. Add Required Secrets

Click **"New repository secret"** for each of these:

#### Required Secrets:

| Secret Name | Value | Description |
|------------|-------|-------------|
| `MONGODB_URI` | `mongodb+srv://Sak12:Saxena@cluster0.os363zi.mongodb.net/houseoftech?retryWrites=true` | Your MongoDB connection string |
| `JWT_SECRET` | `adsdsajdasndans` | Your JWT secret key (consider using a stronger one for production) |

#### Optional (for Vercel Auto-Deploy):

| Secret Name | How to Get It |
|------------|---------------|
| `VERCEL_TOKEN` | 1. Go to https://vercel.com/account/tokens<br>2. Create new token<br>3. Copy and paste |
| `VERCEL_ORG_ID` | 1. Go to your Vercel project settings<br>2. Find under "General" tab |
| `VERCEL_PROJECT_ID` | 1. Go to your Vercel project settings<br>2. Find under "General" tab |

## 3. How to Add a Secret

1. Click **"New repository secret"**
2. Enter the **Name** (exactly as shown above)
3. Enter the **Value**
4. Click **"Add secret"**
5. Repeat for all required secrets

## 4. Verify Secrets Are Added

After adding all secrets, you should see them listed (values will be hidden):
- ✅ MONGODB_URI
- ✅ JWT_SECRET
- ✅ VERCEL_TOKEN (optional)
- ✅ VERCEL_ORG_ID (optional)
- ✅ VERCEL_PROJECT_ID (optional)

## 5. Push Your Code

Once secrets are added, push your code:

```bash
git push origin main
```

The CI/CD pipeline will now have access to these environment variables during the build process!

## 🔒 Security Notes

⚠️ **IMPORTANT:**
- Never commit secrets to your repository
- Never share secrets publicly
- Use strong, unique secrets for production
- Rotate secrets regularly
- Consider using a stronger JWT_SECRET (32+ random characters)

## Generate a Strong JWT Secret

You can generate a strong JWT secret using:

```bash
# On macOS/Linux
openssl rand -base64 32

# Or using Node.js
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

---

**After adding secrets, the CI/CD pipeline will:**
1. ✅ Run ESLint
2. ✅ Run TypeScript type check
3. ✅ Build the application
4. ✅ Deploy to Vercel (if Vercel secrets are configured)
