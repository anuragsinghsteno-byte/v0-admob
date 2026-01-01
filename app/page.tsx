import { Card } from "@/components/ui/card"
import { AlertCircle, Smartphone, Download, FileCode, BookOpen } from "lucide-react"

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 p-6">
      <div className="mx-auto max-w-5xl space-y-6">
        {/* Header */}
        <div className="text-center space-y-3 pt-12 pb-6">
          <div className="flex items-center justify-center gap-3">
            <Smartphone className="h-12 w-12 text-purple-600" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              AdMob React Native App
            </h1>
          </div>
          <p className="text-lg text-gray-600">Complete Mobile Application with Google AdMob Integration</p>
        </div>

        {/* Important Notice */}
        <Card className="border-orange-200 bg-orange-50 p-6">
          <div className="flex gap-4">
            <AlertCircle className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-orange-900">React Native Mobile App</h2>
              <p className="text-orange-800 leading-relaxed">
                This is a <strong>React Native mobile application</strong> for Android/iOS, not a web app. It cannot be
                previewed in this browser environment. To use this app, you need to download the code and run it on an
                Android emulator or physical device.
              </p>
            </div>
          </div>
        </Card>

        {/* What's Included */}
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <FileCode className="h-6 w-6 text-blue-600" />
            What's Included
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="h-2 w-2 bg-green-500 rounded-full mt-2" />
                <div>
                  <p className="font-semibold">Complete React Native App</p>
                  <p className="text-sm text-gray-600">Full source code with TypeScript</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-2 w-2 bg-green-500 rounded-full mt-2" />
                <div>
                  <p className="font-semibold">Google AdMob SDK Integration</p>
                  <p className="text-sm text-gray-600">Using react-native-google-mobile-ads</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-2 w-2 bg-green-500 rounded-full mt-2" />
                <div>
                  <p className="font-semibold">Interstitial Ads</p>
                  <p className="text-sm text-gray-600">Full-screen ads with complete lifecycle</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-2 w-2 bg-green-500 rounded-full mt-2" />
                <div>
                  <p className="font-semibold">Rewarded Video Ads</p>
                  <p className="text-sm text-gray-600">Video ads with reward tracking</p>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="h-2 w-2 bg-blue-500 rounded-full mt-2" />
                <div>
                  <p className="font-semibold">Android Configuration</p>
                  <p className="text-sm text-gray-600">AndroidManifest.xml & Gradle files</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-2 w-2 bg-blue-500 rounded-full mt-2" />
                <div>
                  <p className="font-semibold">Test Ad Unit IDs</p>
                  <p className="text-sm text-gray-600">Pre-configured for immediate testing</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-2 w-2 bg-blue-500 rounded-full mt-2" />
                <div>
                  <p className="font-semibold">Complete Documentation</p>
                  <p className="text-sm text-gray-600">Setup guide & troubleshooting</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-2 w-2 bg-blue-500 rounded-full mt-2" />
                <div>
                  <p className="font-semibold">Clean UI with React Hooks</p>
                  <p className="text-sm text-gray-600">Modern functional components</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Key Features */}
        <Card className="p-6 bg-gradient-to-br from-purple-50 to-blue-50">
          <h2 className="text-2xl font-bold mb-4">🎯 Key Features</h2>
          <div className="grid gap-3">
            <div className="flex items-center gap-3 bg-white p-3 rounded-lg">
              <span className="text-2xl">✅</span>
              <span>AdMob SDK initialization with proper error handling</span>
            </div>
            <div className="flex items-center gap-3 bg-white p-3 rounded-lg">
              <span className="text-2xl">✅</span>
              <span>Complete ad lifecycle management (load, show, close, error)</span>
            </div>
            <div className="flex items-center gap-3 bg-white p-3 rounded-lg">
              <span className="text-2xl">✅</span>
              <span>Loading indicators and user feedback with alerts</span>
            </div>
            <div className="flex items-center gap-3 bg-white p-3 rounded-lg">
              <span className="text-2xl">✅</span>
              <span>Console logging for all ad events (debugging)</span>
            </div>
            <div className="flex items-center gap-3 bg-white p-3 rounded-lg">
              <span className="text-2xl">✅</span>
              <span>Production-ready code following best practices</span>
            </div>
          </div>
        </Card>

        {/* How to Use */}
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Download className="h-6 w-6 text-green-600" />
            How to Use This App
          </h2>
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg space-y-2">
              <p className="font-semibold text-lg">Step 1: Download the Code</p>
              <p className="text-gray-700">
                Click the <strong>three dots</strong> in the top right corner and select <strong>"Download ZIP"</strong>
                to get all the source files.
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg space-y-2">
              <p className="font-semibold text-lg">Step 2: Install Dependencies</p>
              <div className="bg-gray-900 text-white p-3 rounded font-mono text-sm">npm install</div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg space-y-2">
              <p className="font-semibold text-lg">Step 3: Run on Android</p>
              <div className="bg-gray-900 text-white p-3 rounded font-mono text-sm">npm run android</div>
              <p className="text-sm text-gray-600">Make sure you have Android Studio and an emulator/device set up</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg space-y-2">
              <p className="font-semibold text-lg">Step 4: Test the Ads</p>
              <p className="text-gray-700">
                Tap the buttons in the app to load and display test ads. The app uses Google's official test ad unit
                IDs.
              </p>
            </div>
          </div>
        </Card>

        {/* Documentation */}
        <Card className="p-6 bg-blue-50 border-blue-200">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-blue-600" />
            Documentation Files
          </h2>
          <div className="space-y-3">
            <div className="bg-white p-4 rounded-lg">
              <p className="font-semibold text-lg mb-1">📄 SETUP_INSTRUCTIONS.md</p>
              <p className="text-gray-600">
                Complete setup guide with step-by-step instructions, Android configuration, troubleshooting tips, and
                production deployment checklist.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <p className="font-semibold text-lg mb-1">📄 README.md</p>
              <p className="text-gray-600">
                Quick start guide, feature overview, technology stack, and links to additional resources.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <p className="font-semibold text-lg mb-1">📱 App.tsx</p>
              <p className="text-gray-600">
                Main application component with complete AdMob integration logic, event handlers, and UI components.
              </p>
            </div>
          </div>
        </Card>

        {/* Requirements */}
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-4">📋 Requirements</h2>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-purple-600 font-bold">•</span>
              <span>
                <strong>Node.js</strong> version 18 or higher
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-600 font-bold">•</span>
              <span>
                <strong>Android Studio</strong> with Android SDK installed
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-600 font-bold">•</span>
              <span>
                <strong>JDK 17</strong> or higher
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-600 font-bold">•</span>
              <span>
                <strong>React Native CLI</strong> installed globally
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-600 font-bold">•</span>
              <span>
                <strong>Android Emulator</strong> or physical Android device
              </span>
            </li>
          </ul>
        </Card>

        {/* Footer */}
        <div className="text-center py-8 text-gray-600">
          <p className="text-lg font-semibold mb-2">Ready to Get Started?</p>
          <p>Download the code and follow the setup instructions to run your AdMob-enabled React Native app!</p>
          <p className="mt-4 text-sm">Built with ❤️ using React Native and Google AdMob</p>
        </div>
      </div>
    </div>
  )
}
