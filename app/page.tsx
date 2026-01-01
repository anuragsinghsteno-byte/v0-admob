import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Smartphone, Download, FileCode } from "lucide-react"

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 p-8">
      <div className="mx-auto max-w-4xl space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <Smartphone className="h-16 w-16 text-primary" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight">React Native AdMob App</h1>
          <p className="text-muted-foreground text-lg">
            A mobile application demonstrating Google AdMob integration with Interstitial and Rewarded Video Ads
          </p>
        </div>

        {/* Important Notice */}
        <Alert>
          <Smartphone className="h-4 w-4" />
          <AlertTitle>Mobile App Only</AlertTitle>
          <AlertDescription>
            This is a React Native mobile application designed to run on Android devices. It cannot be previewed in a
            web browser. Follow the setup instructions below to run it on your device.
          </AlertDescription>
        </Alert>

        {/* Features */}
        <Card>
          <CardHeader>
            <CardTitle>Features</CardTitle>
            <CardDescription>What's included in this app</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-primary/10 p-2">
                <FileCode className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="font-medium">Interstitial Ads</p>
                <p className="text-sm text-muted-foreground">
                  Full-screen ads that display at natural transition points
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-primary/10 p-2">
                <FileCode className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="font-medium">Rewarded Video Ads</p>
                <p className="text-sm text-muted-foreground">Users watch videos to earn in-app rewards</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-primary/10 p-2">
                <FileCode className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="font-medium">Test Ad Units</p>
                <p className="text-sm text-muted-foreground">Pre-configured with Google's test ad unit IDs</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-primary/10 p-2">
                <FileCode className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="font-medium">Event Handling</p>
                <p className="text-sm text-muted-foreground">
                  Complete lifecycle event management with console logs and alerts
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Setup Instructions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Start</CardTitle>
            <CardDescription>Get the app running on your Android device</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <p className="font-medium">1. Install Dependencies</p>
              <pre className="bg-muted p-3 rounded-md text-sm overflow-x-auto">npm install</pre>
            </div>
            <div className="space-y-2">
              <p className="font-medium">2. Run on Android</p>
              <pre className="bg-muted p-3 rounded-md text-sm overflow-x-auto">npm run android</pre>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                Make sure you have Android Studio installed and an Android device/emulator connected. See{" "}
                <code className="bg-muted px-1 py-0.5 rounded">SETUP_INSTRUCTIONS.md</code> for detailed setup steps.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* File Structure */}
        <Card>
          <CardHeader>
            <CardTitle>Key Files</CardTitle>
            <CardDescription>Important files in this project</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between items-center py-2 border-b">
              <code className="text-sm font-mono">App.tsx</code>
              <span className="text-sm text-muted-foreground">Main React Native component with AdMob logic</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b">
              <code className="text-sm font-mono">index.js</code>
              <span className="text-sm text-muted-foreground">Entry point for React Native app</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b">
              <code className="text-sm font-mono">android/</code>
              <span className="text-sm text-muted-foreground">Android native configuration</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b">
              <code className="text-sm font-mono">SETUP_INSTRUCTIONS.md</code>
              <span className="text-sm text-muted-foreground">Detailed setup guide</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <code className="text-sm font-mono">README.md</code>
              <span className="text-sm text-muted-foreground">Project overview and documentation</span>
            </div>
          </CardContent>
        </Card>

        {/* Download */}
        <Card className="border-primary/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Download className="h-5 w-5" />
              Download Project
            </CardTitle>
            <CardDescription>Get the complete source code</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Click the download button in the top right corner of this chat to get the ZIP file with all source code,
              configuration files, and documentation. Extract it and follow the setup instructions to run the app on
              your Android device.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
