# 🚀 Vercel Deployment Guide for House of Tech

## Prerequisites

1. ✅ GitHub account with your code pushed
2. ✅ Vercel account (free tier works) - [Sign up here](https://vercel.com/signup)
3. ✅ MongoDB Atlas database URL
4. ✅ Strong JWT secret (32+ characters)

---

## 📋 Step-by-Step Deployment

### Step 1: Prepare Your Repository

1. **Ensure all changes are committed:**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

### Step 2: Create MongoDB Atlas Database (if not done)

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Create a database user
4. Whitelist all IPs (0.0.0.0/0) for Vercel
5. Get your connection string (should look like):
   ```
   mongodb+srv://username:password@cluster.mongodb.net/houseoftech?retryWrites=true&w=majority
   ```

### Step 3: Deploy to Vercel

#### Option A: Via Vercel Dashboard (Recommended)

1. **Go to [Vercel](https://vercel.com) and sign in**

2. **Click "Add New Project"**

3. **Import your GitHub repository:**
   - Connect your GitHub account if not already
   - Select `houseoftech` repository
   - Click "Import"

4. **Configure Project:**
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: `./`
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `.next` (auto-detected)

5. **Add Environment Variables:**
   Click "Environment Variables" and add these:

   | Name | Value | Example |
   |------|-------|---------|
   | `MONGODB_URI` | Your MongoDB connection string | `mongodb+srv://user:pass@cluster.mongodb.net/houseoftech` |
   | `JWT_SECRET` | Strong secret (32+ chars) | `your-super-secret-jwt-key-minimum-32-characters-long` |
   | `NEXT_PUBLIC_API_URL` | `/api` | `/api` |

   **Important:** Make sure to add these to all environments (Production, Preview, Development)

6. **Click "Deploy"**

7. **Wait for deployment to complete** (usually 2-3 minutes)

8. **Your app is live!** 🎉
   - You'll get a URL like: `https://houseoftech.vercel.app`

#### Option B: Via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

4. **Follow the prompts:**
   - Set up and deploy? `Y`
   - Which scope? Select your account
   - Link to existing project? `N`
   - What's your project's name? `houseoftech`
   - In which directory is your code located? `./`

5. **Add environment variables:**
   ```bash
   vercel env add MONGODB_URI production
   vercel env add JWT_SECRET production
   vercel env add NEXT_PUBLIC_API_URL production
   ```

6. **Deploy to production:**
   ```bash
   vercel --prod
   ```

---

## 🔧 Post-Deployment Configuration

### 1. Verify Environment Variables

Go to your Vercel project → Settings → Environment Variables and ensure all three variables are set.

### 2. Update CORS (if needed)

If you face CORS issues, update your API routes to allow your Vercel domain.

### 3. Test Your Application

1. **Visit your deployment URL**
2. **Test registration:** Create a new account
3. **Test login:** Login with your credentials
4. **Test CRUD:** Create, read, update, delete courses
5. **Test protected routes:** Logout and try accessing dashboard

---

## 🔍 Troubleshooting

### Build Fails

**Error: "Module not found"**
- Solution: Run `npm install` locally and ensure all dependencies are in `package.json`

**Error: "Type errors"**
- Solution: Run `npm run build` locally to catch TypeScript errors

### Runtime Errors

**Error: "Cannot connect to MongoDB"**
- Check your `MONGODB_URI` is correct in Vercel environment variables
- Ensure MongoDB Atlas whitelist includes `0.0.0.0/0`

**Error: "JWT token invalid"**
- Ensure `JWT_SECRET` is set in Vercel environment variables
- Secret must be 32+ characters

**Error: "API routes returning 404"**
- Ensure `NEXT_PUBLIC_API_URL=/api` is set
- Check API routes are in `app/api/` directory

---

## 🔄 Continuous Deployment

Vercel automatically deploys when you push to GitHub:

1. **Make changes locally**
2. **Commit and push:**
   ```bash
   git add .
   git commit -m "Your changes"
   git push origin main
   ```
3. **Vercel automatically builds and deploys** ✨

---

## 📊 Monitoring

### View Deployment Logs
1. Go to your Vercel dashboard
2. Click on your project
3. Click on a deployment
4. View build logs and runtime logs

### Check Analytics
- Vercel provides free analytics
- Go to Project → Analytics tab

---

## 🎯 Quick Deployment Checklist

- [ ] Code pushed to GitHub
- [ ] MongoDB Atlas database created
- [ ] MongoDB IP whitelist set to 0.0.0.0/0
- [ ] Vercel account created
- [ ] Project imported from GitHub
- [ ] Environment variables added:
  - [ ] MONGODB_URI
  - [ ] JWT_SECRET
  - [ ] NEXT_PUBLIC_API_URL
- [ ] Deployment successful
- [ ] Registration working
- [ ] Login working
- [ ] CRUD operations working
- [ ] Protected routes working

---

## 🌐 Custom Domain (Optional)

1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed by Vercel
4. Wait for DNS propagation (can take 24-48 hours)

---

## 📱 Environment Variables Reference

```env
# Production Environment Variables for Vercel

MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/houseoftech?retryWrites=true&w=majority
JWT_SECRET=your-super-secret-jwt-key-minimum-32-characters-long
NEXT_PUBLIC_API_URL=/api
```

---

## 🎉 You're Done!

Your House of Tech application is now live on Vercel!

Share your deployment URL: `https://your-project.vercel.app`

---

**Need Help?**
- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
- [MongoDB Atlas Guide](https://docs.atlas.mongodb.com/)
