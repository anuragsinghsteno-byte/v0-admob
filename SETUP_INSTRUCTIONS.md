# 📱 AdMob React Native App - Complete Setup Guide

## 🎯 Overview
This is a production-ready React Native application demonstrating Google AdMob integration with Interstitial and Rewarded Video Ads.

---

## 📋 Prerequisites

Before starting, ensure you have:
- Node.js (v18 or higher) installed
- Java Development Kit (JDK 17 or higher)
- Android Studio installed with Android SDK
- React Native CLI installed: `npm install -g react-native-cli`
- Physical Android device or Android Emulator

---

## 🚀 Installation Steps

### Step 1: Install Dependencies

```bash
# Install Node modules
npm install

# OR using yarn
yarn install
```

### Step 2: Android Configuration

#### 2.1 Update AndroidManifest.xml

The `AndroidManifest.xml` file already includes the AdMob App ID. For production, replace the test App ID:

```xml
<!-- Replace this test ID with your actual AdMob App ID -->
<meta-data
  android:name="com.google.android.gms.ads.APPLICATION_ID"
  android:value="ca-app-pub-3940256099942544~3347511713"/>
```

#### 2.2 Verify build.gradle Files

Ensure `android/app/build.gradle` includes:

```gradle
dependencies {
    // ... other dependencies
    implementation 'com.google.android.gms:play-services-ads:23.6.0'
}
```

### Step 3: Link Native Dependencies (Automatic)

React Native 0.60+ supports autolinking. Just run:

```bash
cd android
./gradlew clean
cd ..
```

---

## 🏃 Running the App

### Method 1: Using React Native CLI

```bash
# Start Metro bundler
npm start

# In another terminal, run Android app
npm run android
```

### Method 2: Using Android Studio

1. Open `android` folder in Android Studio
2. Wait for Gradle sync to complete
3. Click "Run" button or press Shift+F10

---

## 🧪 Test Ad Unit IDs (Already Configured)

The app uses Google's test ad unit IDs for development:

| Ad Format | Test Ad Unit ID |
|-----------|----------------|
| **Interstitial** | `ca-app-pub-3940256099942544/1033173712` |
| **Rewarded Video** | `ca-app-pub-3940256099942544/5224354917` |

These are automatically used via `TestIds` from the SDK:
```typescript
import { TestIds } from 'react-native-google-mobile-ads';

const interstitialAdUnitId = TestIds.INTERSTITIAL;
const rewardedAdUnitId = TestIds.REWARDED;
```

---

## 🔄 Switching to Production Ad Units

### Step 1: Create AdMob Account
1. Go to [AdMob Console](https://admob.google.com/)
2. Create new app or select existing
3. Create ad units for Interstitial and Rewarded ads

### Step 2: Update App Code

In `App.tsx`, replace test IDs:

```typescript
// BEFORE (Test Mode)
const interstitialAdUnitId = TestIds.INTERSTITIAL;
const rewardedAdUnitId = TestIds.REWARDED;

// AFTER (Production)
const interstitialAdUnitId = 'ca-app-pub-XXXXX/YYYYY'; // Your Interstitial ID
const rewardedAdUnitId = 'ca-app-pub-XXXXX/ZZZZZ';     // Your Rewarded ID
```

### Step 3: Update AndroidManifest.xml

Replace test App ID with your production App ID:

```xml
<meta-data
  android:name="com.google.android.gms.ads.APPLICATION_ID"
  android:value="ca-app-pub-XXXXX~YYYYY"/> <!-- Your App ID -->
```

---

## 📁 Project Structure

```
AdMobReactNativeApp/
├── App.tsx                          # Main application component
├── index.js                         # App entry point
├── package.json                     # Dependencies
├── android/
│   ├── app/
│   │   ├── build.gradle            # App-level Gradle config
│   │   └── src/main/
│   │       └── AndroidManifest.xml # Android manifest with AdMob config
│   └── build.gradle                # Project-level Gradle config
└── SETUP_INSTRUCTIONS.md           # This file
```

---

## 🔑 Key Files Explained

### 1. **App.tsx** (Main Application Logic)

This is the core of the application containing:

- **AdMob Initialization**: `mobileAds().initialize()`
- **Interstitial Ad Logic**: Load, show, and handle lifecycle events
- **Rewarded Ad Logic**: Load, show, track rewards
- **UI Components**: Buttons, status indicators, styling
- **Event Listeners**: 
  - `LOADED` - Ad successfully loaded
  - `OPENED` - Ad displayed to user
  - `CLOSED` - Ad dismissed
  - `ERROR` - Ad failed to load
  - `EARNED_REWARD` - User earned reward (rewarded ads only)

### 2. **AndroidManifest.xml**

Contains required permissions and AdMob App ID:

```xml
<!-- Internet permission for ad loading -->
<uses-permission android:name="android.permission.INTERNET" />

<!-- AdMob App ID -->
<meta-data
  android:name="com.google.android.gms.ads.APPLICATION_ID"
  android:value="ca-app-pub-XXXXX~YYYYY"/>
```

### 3. **android/app/build.gradle**

Includes Google Mobile Ads SDK dependency:

```gradle
dependencies {
    implementation 'com.google.android.gms:play-services-ads:23.6.0'
}
```

---

## 🎮 How to Use the App

### Interstitial Ad Flow:
1. Tap "Show Interstitial Ad" button
2. Ad loads in background (loading indicator shown)
3. Full-screen ad displays automatically when ready
4. User closes ad to return to app
5. Alert confirms ad was closed

### Rewarded Video Ad Flow:
1. Tap "Show Rewarded Video Ad" button
2. Ad loads in background (loading indicator shown)
3. Video ad plays automatically when ready
4. User watches video to completion
5. Reward earned (alert shows reward details)
6. User closes ad to return to app

---

## 🐛 Troubleshooting

### Issue: "AdMob SDK not initialized"
**Solution**: Wait a few seconds after app launch. Initialization happens automatically.

### Issue: Ads not loading
**Solution**: 
- Check internet connection
- Verify test ad unit IDs are used during development
- Check console logs for error messages
- Ensure AndroidManifest.xml has correct App ID

### Issue: "App ID missing" error
**Solution**: Verify `AndroidManifest.xml` contains AdMob App ID meta-data tag.

### Issue: Gradle build fails
**Solution**: 
```bash
cd android
./gradlew clean
cd ..
npm run android
```

---

## 📊 Ad Event Logging

The app logs all ad events to console:

```javascript
✅ AdMob SDK initialized successfully
📱 Loading Interstitial Ad...
✅ Interstitial Ad loaded successfully
👁️ Interstitial Ad opened
❌ Interstitial Ad closed
🎁 Loading Rewarded Video Ad...
✅ Rewarded Ad loaded successfully
🎉 User earned reward: { amount: 10, type: 'coins' }
```

---

## 🔐 Best Practices

1. **Always use test ad unit IDs during development** to avoid policy violations
2. **Implement proper error handling** for all ad events
3. **Show loading indicators** while ads are loading
4. **Clean up event listeners** to prevent memory leaks
5. **Test on real devices** for accurate ad behavior
6. **Respect user experience** - don't show ads too frequently
7. **Handle all ad states** (loading, loaded, failed, closed)
8. **Use appropriate ad formats** for different user flows

---

## 📱 Permissions Required

The app requires these Android permissions (already configured):

```xml
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
```

---

## 🎨 Customization

### Change Button Colors

In `App.tsx`, modify the `styles` object:

```typescript
interstitialButton: {
  backgroundColor: '#2196F3', // Change this color
},
rewardedButton: {
  backgroundColor: '#FF5722', // Change this color
},
```

### Modify Ad Loading Behavior

You can preload ads instead of loading on button click:

```typescript
useEffect(() => {
  if (isAdMobInitialized) {
    // Preload interstitial ad on app start
    preloadInterstitialAd();
  }
}, [isAdMobInitialized]);
```

---

## 📚 Additional Resources

- [React Native Google Mobile Ads Docs](https://docs.page/invertase/react-native-google-mobile-ads)
- [AdMob Quick Start Guide](https://developers.google.com/admob/android/quick-start)
- [AdMob Policy Center](https://support.google.com/admob/answer/6128543)
- [React Native Documentation](https://reactnative.dev/docs/getting-started)

---

## ✅ Checklist Before Production

- [ ] Replace test ad unit IDs with production IDs
- [ ] Update AdMob App ID in AndroidManifest.xml
- [ ] Test ads on real devices
- [ ] Review AdMob policies
- [ ] Implement analytics tracking
- [ ] Add proper error logging service
- [ ] Test app with production builds
- [ ] Verify ad frequency caps
- [ ] Test all ad lifecycle events
- [ ] Ensure proper memory management

---

## 🎯 Success Criteria

Your app is working correctly when:
- ✅ AdMob SDK initializes successfully
- ✅ Interstitial ads load and display
- ✅ Rewarded video ads load and display
- ✅ Rewards are granted correctly
- ✅ All ad events are logged
- ✅ Alerts show proper feedback
- ✅ Loading states are visible
- ✅ No memory leaks occur

---

## 💡 Tips

1. **Test frequently**: Run the app on real devices regularly
2. **Monitor console**: Always check console logs for errors
3. **Use test IDs**: Never use production IDs during development
4. **Handle failures**: Always implement error handling
5. **User experience**: Don't show ads too aggressively
6. **Stay updated**: Keep `react-native-google-mobile-ads` package updated

---

## 🆘 Need Help?

If you encounter issues:
1. Check console logs for error messages
2. Verify all setup steps are completed
3. Ensure using latest package versions
4. Review [official documentation](https://docs.page/invertase/react-native-google-mobile-ads)
5. Check GitHub issues for similar problems

---

**Happy Coding! 🚀**
