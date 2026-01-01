# 🎯 AdMob React Native Demo App

A complete, production-ready React Native application demonstrating Google AdMob integration with **Interstitial Ads** and **Rewarded Video Ads**.

## ✨ Features

- ✅ **Google AdMob SDK Integration** using `react-native-google-mobile-ads`
- ✅ **Interstitial Ads** - Full-screen ads at natural transition points
- ✅ **Rewarded Video Ads** - Reward users for watching video content
- ✅ **Clean, Modern UI** with Material Design principles
- ✅ **Comprehensive Event Handling** for all ad lifecycle states
- ✅ **Loading States & Error Handling** with user feedback
- ✅ **Test Ad Unit IDs** pre-configured for development
- ✅ **Console Logging** for debugging and monitoring
- ✅ **Production-Ready Code** following best practices

## 📱 Screenshots

The app features:
- Status indicator showing AdMob initialization state
- Two primary action buttons for different ad types
- Loading indicators during ad loading
- Success/error alerts for user feedback
- Clean, responsive design

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- React Native development environment
- Android Studio with Android SDK
- JDK 17+

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run on Android**
   ```bash
   npm run android
   ```

3. **Test the ads**
   - Tap "Show Interstitial Ad" to display full-screen ad
   - Tap "Show Rewarded Video Ad" to watch video and earn reward

## 📖 Documentation

See [SETUP_INSTRUCTIONS.md](./SETUP_INSTRUCTIONS.md) for:
- Complete setup guide
- Android configuration steps
- Production deployment checklist
- Troubleshooting tips
- Best practices

## 🧪 Test Ad Unit IDs

The app uses Google's official test ad unit IDs:

| Ad Type | ID |
|---------|-----|
| Interstitial | `ca-app-pub-3940256099942544/1033173712` |
| Rewarded | `ca-app-pub-3940256099942544/5224354917` |

## 🔧 Technology Stack

- **React Native** 0.76.5
- **React** 18.3.1
- **react-native-google-mobile-ads** 14.3.2
- **TypeScript** 5.0.4
- **Google Mobile Ads SDK** 23.6.0

## 📂 Project Structure

```
├── App.tsx                    # Main app component with ad logic
├── index.js                   # App entry point
├── package.json              # Dependencies
├── android/                  # Android native code
│   ├── app/build.gradle     # Android dependencies
│   └── app/src/main/
│       └── AndroidManifest.xml  # AdMob configuration
└── SETUP_INSTRUCTIONS.md    # Detailed setup guide
```

## 🎯 Key Features Explained

### Interstitial Ads
- Load on demand
- Display full-screen
- Close button available
- Event tracking (loaded, opened, closed, error)

### Rewarded Video Ads
- Load on demand
- User watches video
- Reward granted on completion
- Early close detection
- Event tracking (loaded, opened, earned reward, closed, error)

## 🔒 Ad Event Handling

Both ad types handle these events:
- `LOADED` - Ad successfully loaded
- `OPENED` - Ad shown to user
- `CLOSED` - User dismissed ad
- `ERROR` - Ad failed to load
- `EARNED_REWARD` - User completed rewarded ad (rewarded only)

## 🚢 Production Deployment

Before releasing:

1. Create AdMob account and app
2. Generate production ad unit IDs
3. Update ad unit IDs in `App.tsx`
4. Update AdMob App ID in `AndroidManifest.xml`
5. Test on real devices
6. Build release APK/AAB

## 📊 Console Logging

All ad events are logged for debugging:
```
✅ AdMob SDK initialized successfully
📱 Loading Interstitial Ad...
👁️ Interstitial Ad opened
❌ Interstitial Ad closed
🎉 User earned reward: {amount: 10, type: 'coins'}
```

## 🐛 Common Issues

**Ads not loading?**
- Check internet connection
- Verify test ad unit IDs
- Check console for errors

**Build failures?**
```bash
cd android && ./gradlew clean && cd ..
```

See [SETUP_INSTRUCTIONS.md](./SETUP_INSTRUCTIONS.md) for more troubleshooting.

## 📚 Resources

- [React Native Google Mobile Ads](https://docs.page/invertase/react-native-google-mobile-ads)
- [AdMob Android Quickstart](https://developers.google.com/admob/android/quick-start)
- [AdMob Policies](https://support.google.com/admob/answer/6128543)

## 📝 License

This is a demo application for educational purposes.

## 🤝 Contributing

This is a template/demo project. Feel free to fork and customize for your needs!

---

**Built with ❤️ using React Native and Google AdMob**
