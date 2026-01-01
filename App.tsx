"use client"

import type React from "react"
import { useState, useEffect } from "react"
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  StatusBar,
  ActivityIndicator,
  ScrollView,
} from "react-native"
import mobileAds, {
  InterstitialAd,
  RewardedAd,
  AdEventType,
  RewardedAdEventType,
  TestIds,
} from "react-native-google-mobile-ads"

function App(): React.JSX.Element {
  const [isAdMobInitialized, setIsAdMobInitialized] = useState(false)
  const [interstitialLoaded, setInterstitialLoaded] = useState(false)
  const [rewardedLoaded, setRewardedLoaded] = useState(false)
  const [isLoadingInterstitial, setIsLoadingInterstitial] = useState(false)
  const [isLoadingRewarded, setIsLoadingRewarded] = useState(false)
  const [rewardEarned, setRewardEarned] = useState(false)

  // Use test ad unit IDs for development
  const interstitialAdUnitId = TestIds.INTERSTITIAL
  const rewardedAdUnitId = TestIds.REWARDED

  // Initialize AdMob SDK
  useEffect(() => {
    initializeAdMob()
  }, [])

  const initializeAdMob = async () => {
    try {
      await mobileAds().initialize()
      setIsAdMobInitialized(true)
      console.log("✅ AdMob SDK initialized successfully")
      Alert.alert("Success", "AdMob SDK initialized successfully!")
    } catch (error) {
      console.error("❌ AdMob initialization failed:", error)
      Alert.alert("Error", "Failed to initialize AdMob SDK")
    }
  }

  // Load and show Interstitial Ad
  const loadAndShowInterstitial = async () => {
    if (!isAdMobInitialized) {
      Alert.alert("Error", "AdMob SDK not initialized yet")
      return
    }

    setIsLoadingInterstitial(true)
    console.log("📱 Loading Interstitial Ad...")

    try {
      const interstitial = InterstitialAd.createForAdRequest(interstitialAdUnitId)

      // Set up event listeners
      const loadedListener = interstitial.addAdEventListener(AdEventType.LOADED, () => {
        console.log("✅ Interstitial Ad loaded successfully")
        setInterstitialLoaded(true)
        setIsLoadingInterstitial(false)

        // Show the ad immediately after loading
        interstitial.show()
      })

      const openedListener = interstitial.addAdEventListener(AdEventType.OPENED, () => {
        console.log("👁️ Interstitial Ad opened")
      })

      const closedListener = interstitial.addAdEventListener(AdEventType.CLOSED, () => {
        console.log("❌ Interstitial Ad closed")
        Alert.alert("Ad Closed", "Interstitial Ad was closed")
        setInterstitialLoaded(false)

        // Clean up listeners
        loadedListener()
        openedListener()
        closedListener()
        errorListener()
      })

      const errorListener = interstitial.addAdEventListener(AdEventType.ERROR, (error) => {
        console.error("❌ Interstitial Ad failed to load:", error)
        Alert.alert("Error", `Failed to load Interstitial Ad: ${error.message}`)
        setIsLoadingInterstitial(false)
        setInterstitialLoaded(false)

        // Clean up listeners
        loadedListener()
        openedListener()
        closedListener()
        errorListener()
      })

      // Load the ad
      interstitial.load()
    } catch (error) {
      console.error("❌ Error creating Interstitial Ad:", error)
      Alert.alert("Error", "Failed to create Interstitial Ad")
      setIsLoadingInterstitial(false)
    }
  }

  // Load and show Rewarded Video Ad
  const loadAndShowRewarded = async () => {
    if (!isAdMobInitialized) {
      Alert.alert("Error", "AdMob SDK not initialized yet")
      return
    }

    setIsLoadingRewarded(true)
    setRewardEarned(false)
    console.log("🎁 Loading Rewarded Video Ad...")

    try {
      const rewarded = RewardedAd.createForAdRequest(rewardedAdUnitId)

      // Set up event listeners
      const loadedListener = rewarded.addAdEventListener(RewardedAdEventType.LOADED, () => {
        console.log("✅ Rewarded Ad loaded successfully")
        setRewardedLoaded(true)
        setIsLoadingRewarded(false)

        // Show the ad immediately after loading
        rewarded.show()
      })

      const openedListener = rewarded.addAdEventListener(AdEventType.OPENED, () => {
        console.log("👁️ Rewarded Ad opened")
      })

      const earnedRewardListener = rewarded.addAdEventListener(RewardedAdEventType.EARNED_REWARD, (reward) => {
        console.log("🎉 User earned reward:", reward)
        setRewardEarned(true)
        Alert.alert("Reward Earned! 🎉", `Congratulations! You earned ${reward.amount} ${reward.type}`)
      })

      const closedListener = rewarded.addAdEventListener(AdEventType.CLOSED, () => {
        console.log("❌ Rewarded Ad closed")
        setRewardedLoaded(false)

        if (!rewardEarned) {
          Alert.alert("Ad Closed", "Rewarded Ad was closed without earning reward")
        }

        // Clean up listeners
        loadedListener()
        openedListener()
        earnedRewardListener()
        closedListener()
        errorListener()
      })

      const errorListener = rewarded.addAdEventListener(AdEventType.ERROR, (error) => {
        console.error("❌ Rewarded Ad failed to load:", error)
        Alert.alert("Error", `Failed to load Rewarded Ad: ${error.message}`)
        setIsLoadingRewarded(false)
        setRewardedLoaded(false)

        // Clean up listeners
        loadedListener()
        openedListener()
        earnedRewardListener()
        closedListener()
        errorListener()
      })

      // Load the ad
      rewarded.load()
    } catch (error) {
      console.error("❌ Error creating Rewarded Ad:", error)
      Alert.alert("Error", "Failed to create Rewarded Ad")
      setIsLoadingRewarded(false)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#6200EA" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>AdMob Demo App</Text>
          <Text style={styles.headerSubtitle}>Google Mobile Ads Integration</Text>
        </View>

        <View style={styles.statusContainer}>
          <View style={styles.statusRow}>
            <Text style={styles.statusLabel}>AdMob Status:</Text>
            <View style={[styles.statusBadge, isAdMobInitialized ? styles.statusSuccess : styles.statusPending]}>
              <Text style={styles.statusText}>{isAdMobInitialized ? "✓ Initialized" : "⏳ Initializing..."}</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Interstitial Ad</Text>
          <Text style={styles.sectionDescription}>
            Full-screen ads that appear at natural transition points in your app
          </Text>

          <TouchableOpacity
            style={[
              styles.button,
              styles.interstitialButton,
              (!isAdMobInitialized || isLoadingInterstitial) && styles.buttonDisabled,
            ]}
            onPress={loadAndShowInterstitial}
            disabled={!isAdMobInitialized || isLoadingInterstitial}
          >
            {isLoadingInterstitial ? (
              <View style={styles.buttonContent}>
                <ActivityIndicator color="#fff" size="small" />
                <Text style={styles.buttonText}>Loading Ad...</Text>
              </View>
            ) : (
              <Text style={styles.buttonText}>Show Interstitial Ad</Text>
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Rewarded Video Ad</Text>
          <Text style={styles.sectionDescription}>Watch a video ad to earn rewards (coins, lives, bonuses, etc.)</Text>

          <TouchableOpacity
            style={[
              styles.button,
              styles.rewardedButton,
              (!isAdMobInitialized || isLoadingRewarded) && styles.buttonDisabled,
            ]}
            onPress={loadAndShowRewarded}
            disabled={!isAdMobInitialized || isLoadingRewarded}
          >
            {isLoadingRewarded ? (
              <View style={styles.buttonContent}>
                <ActivityIndicator color="#fff" size="small" />
                <Text style={styles.buttonText}>Loading Ad...</Text>
              </View>
            ) : (
              <Text style={styles.buttonText}>Show Rewarded Video Ad</Text>
            )}
          </TouchableOpacity>

          {rewardEarned && (
            <View style={styles.rewardBadge}>
              <Text style={styles.rewardText}>🎉 Reward Earned!</Text>
            </View>
          )}
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>📱 Test Mode Active</Text>
          <Text style={styles.infoText}>Using test ad unit IDs. Replace with your production IDs before release.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  scrollContent: {
    paddingBottom: 30,
  },
  header: {
    backgroundColor: "#6200EA",
    padding: 30,
    alignItems: "center",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#E0E0E0",
  },
  statusContainer: {
    margin: 20,
    padding: 15,
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  statusRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  statusLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  statusSuccess: {
    backgroundColor: "#4CAF50",
  },
  statusPending: {
    backgroundColor: "#FF9800",
  },
  statusText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "bold",
  },
  section: {
    margin: 20,
    padding: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  sectionDescription: {
    fontSize: 14,
    color: "#666",
    marginBottom: 20,
    lineHeight: 20,
  },
  button: {
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  interstitialButton: {
    backgroundColor: "#2196F3",
  },
  rewardedButton: {
    backgroundColor: "#FF5722",
  },
  buttonDisabled: {
    backgroundColor: "#BDBDBD",
    elevation: 0,
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  rewardBadge: {
    marginTop: 15,
    padding: 12,
    backgroundColor: "#4CAF50",
    borderRadius: 10,
    alignItems: "center",
  },
  rewardText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  infoBox: {
    margin: 20,
    padding: 15,
    backgroundColor: "#FFF3E0",
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: "#FF9800",
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#E65100",
    marginBottom: 5,
  },
  infoText: {
    fontSize: 13,
    color: "#E65100",
    lineHeight: 18,
  },
})

export default App
