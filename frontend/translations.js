// translations.js — English / Hindi UI strings for Jeevika
// Usage: add data-key="keyName" to any HTML element
// Call applyTranslations() on page load and on toggle

const translations = {
  en: {
    // App-wide
    appName: "Jeevika",
    tagline: "Farmer Assistant Platform",
    backBtn: "← Back",
    langToggleLabel: "हिंदी",
    nightMode: "Night Mode",
    lightMode: "Light Mode",
    comingSoon: "Coming Soon",
    openBtn: "Open",

    // Login page
    loginFullNameLabel: "Full Name",
    loginFullNamePlaceholder: "Enter your full name",
    loginPhoneLabel: "Phone Number",
    loginPhonePlaceholder: "10-digit mobile number",
    loginSendOtp: "Send OTP",
    loginSendingOtp: "Sending OTP...",
    loginOtpLabel: "Enter OTP",
    loginOtpPlaceholder: "6-digit OTP",
    loginVerifyOtp: "Verify OTP",
    loginVerifyingOtp: "Verifying...",
    loginErrNameRequired: "Please enter your full name.",
    loginErrPhoneInvalid: "Please enter a valid 10-digit phone number.",
    loginErrOtpEmpty: "Please enter the OTP.",
    loginErrGeneric: "Something went wrong. Please try again.",
    loginErrInvalidOtp: "Invalid OTP. Please check and try again.",
    loginErrTooManyReq: "Too many attempts. Please wait a few minutes and try again.",
    loginOtpSent: "OTP sent to +91",

    // Dashboard
    dashWelcome: "Welcome,",
    dashSubtitle: "What would you like to do today?",
    dashLogout: "Logout",
    dashCard1Title: "Government Schemes",
    dashCard1Desc: "Explore farmer welfare schemes by the government",
    dashCard2Title: "Mandi Bhaav",
    dashCard2Desc: "Check latest crop market prices by state",
    dashCard3Title: "Disease Detection",
    dashCard3Desc: "Upload crop image to detect disease",
    dashCard4Title: "Farmer Community",
    dashCard4Desc: "Connect with farmers, share problems and solutions",
    dashComingSoonBadge: "Coming Soon",

    // Schemes page
    schemesTitle: "Government Schemes",
    schemesSearchPlaceholder: "Search schemes...",
    schemesApplyBtn: "Apply / Learn More",
    schemesEligibilityLabel: "Eligibility:",
    schemesNoResults: "No schemes found matching your search.",

    // Market page
    marketTitle: "Mandi Bhaav",
    marketStateLabel: "Select State",
    marketGetPricesBtn: "Get Prices",
    marketFetching: "Fetching prices...",
    marketColCommodity: "Commodity",
    marketColMarket: "Market",
    marketColMin: "Min Price (₹)",
    marketColMax: "Max Price (₹)",
    marketColModal: "Modal Price (₹)",
    marketColDate: "Date",
    marketNoData: "No data found for this state. Try another state.",
    marketShowingResults: "Showing",
    marketResultsFor: "results for",
    marketSelectPrompt: "Select a state and click Get Prices to view live market rates.",
    marketFallbackNote: "⚠️ Showing sample data — live API unavailable right now.",
    marketFooter: "Data sourced from data.gov.in — AgMarknet | Ministry of Agriculture and Farmers Welfare",

    // Disease page
    diseaseTitle: "Disease Detection",
    diseaseUploadInstruction: "Upload a clear photo of the affected crop leaf",
    diseaseDragDrop: "Drag and drop your crop image here",
    diseaseBrowse: "or click to browse files",
    diseaseFormats: "Supported: JPG, PNG, JPEG",
    diseaseAnalyzeBtn: "Analyze Crop Disease",
    diseaseAnalyzing: "Analyzing...",
    diseaseRecommendationLabel: "Treatment Recommendation",
    diseaseConfidence: "Confidence",
    diseaseApiError: "Analysis failed. Please try again.",
    diseaseServerOffline: "Cannot reach the backend server. Please start it: cd disease_backend && uvicorn main:app --reload",
    diseaseInfoNote: "Make sure the disease detection backend is running at http://127.0.0.1:8000 before clicking Analyze.",

    // Scheme names & descriptions
    scheme1Name: "PM-KISAN",
    scheme1Desc: "Direct income support of ₹6,000 per year in 3 installments to farmer families.",
    scheme1Eligibility: "Small and marginal farmers with cultivable land.",

    scheme2Name: "PM Fasal Bima Yojana",
    scheme2Desc: "Crop insurance providing financial support against crop loss due to natural calamities.",
    scheme2Eligibility: "All farmers growing notified crops in notified areas.",

    scheme3Name: "Kisan Credit Card",
    scheme3Desc: "Provides short-term credit for crop cultivation, post-harvest expenses and allied activities.",
    scheme3Eligibility: "Farmers, sharecroppers, tenant farmers and self-help groups.",

    scheme4Name: "Soil Health Card Scheme",
    scheme4Desc: "Provides farmers a Soil Health Card with info on nutrient status and fertilizer recommendations.",
    scheme4Eligibility: "All farmers across India.",

    scheme5Name: "PM Krishi Sinchai Yojana",
    scheme5Desc: "Ensures water access to every farm — 'Har Khet Ko Pani' and 'More Crop Per Drop'.",
    scheme5Eligibility: "All farmers; priority to water-scarce areas.",

    scheme6Name: "eNAM — National Agriculture Market",
    scheme6Desc: "Online trading platform for agricultural commodities connecting farmers directly to buyers.",
    scheme6Eligibility: "All registered farmers across India.",

    // Community page
    communityTitle: "Farmer Community",
    communityCompose: "Share your farming experience or problem...",
    communityPostBtn: "Post",
    communityAddPhoto: "Add Photo",
    communityTagProblem: "Problem",
    communityTagSuggestion: "Suggestion",
    communityTagExperience: "Experience",
    communityTagGeneral: "General",
    communityReplyPlaceholder: "Write a reply...",
    communityRepliesBtn: "Reply",
    communityNoReplies: "No replies yet. Be the first!",
    communityEmptyFeed: "Be the first to post in the community!",
    communityPosting: "Posting...",
    communityErrEmpty: "Please write something before posting.",

    // Weather page
    weatherTitle: "Weather",
    weatherSubtitle: "Get live weather for your farm location",
    weatherCityLabel: "City / Town",
    weatherCityPlaceholder: "e.g. Lucknow",
    weatherStateLabel: "State",
    weatherStatePlaceholder: "e.g. Uttar Pradesh",
    weatherGetBtn: "Get Weather",
    weatherFetching: "Fetching...",
    weatherFeelsLike: "Feels like",
    weatherHumidity: "Humidity",
    weatherWind: "Wind",
    weatherMaxTemp: "Max Temp",
    weatherMinTemp: "Min Temp",
    weatherVisibility: "Visibility",
    weatherPressure: "Pressure",
    weatherSunrise: "Sunrise",
    weatherSunset: "Sunset",
    weatherSavedLocation: "Saved location",
    weatherErrNoCity: "Please enter a city name.",
    weatherErrNotFound: "City not found. Check spelling and try again.",
    weatherErrApi: "Could not fetch weather. Check your API key or try again.",
    weatherTipRain: "Good time to avoid spraying pesticides. Rain may wash away chemicals.",
    weatherTipThunder: "Avoid fieldwork during thunderstorms. Stay indoors.",
    weatherTipFog: "Foggy conditions may promote fungal diseases. Monitor crops closely.",
    weatherTipHot: "Very hot day — water crops in early morning or evening to reduce evaporation.",
    weatherTipCold: "Cold weather — protect sensitive crops from frost damage.",
    weatherTipHumid: "High humidity — watch for fungal infections. Ensure good crop ventilation.",
    weatherTipNormal: "Good farming conditions today. Ideal for field activities.",

    // Dashboard
    dashCard5Title: "Weather",
    dashCard5Desc: "Live temperature and farming weather for your location",
  },

  hi: {
    // App-wide
    appName: "जीविका",
    tagline: "किसान सहायक मंच",
    backBtn: "← वापस",
    langToggleLabel: "English",
    nightMode: "रात्रि मोड",
    lightMode: "दिन मोड",
    comingSoon: "जल्द आ रहा है",
    openBtn: "खोलें",

    // Login page
    loginFullNameLabel: "पूरा नाम",
    loginFullNamePlaceholder: "अपना पूरा नाम दर्ज करें",
    loginPhoneLabel: "फ़ोन नंबर",
    loginPhonePlaceholder: "10 अंकों का मोबाइल नंबर",
    loginSendOtp: "OTP भेजें",
    loginSendingOtp: "OTP भेजा जा रहा है...",
    loginOtpLabel: "OTP दर्ज करें",
    loginOtpPlaceholder: "6 अंकों का OTP",
    loginVerifyOtp: "OTP सत्यापित करें",
    loginVerifyingOtp: "सत्यापित हो रहा है...",
    loginErrNameRequired: "कृपया अपना पूरा नाम दर्ज करें।",
    loginErrPhoneInvalid: "कृपया एक वैध 10 अंकों का फ़ोन नंबर दर्ज करें।",
    loginErrOtpEmpty: "कृपया OTP दर्ज करें।",
    loginErrGeneric: "कुछ गलत हो गया। कृपया पुनः प्रयास करें।",
    loginErrInvalidOtp: "गलत OTP। कृपया जाँचें और पुनः प्रयास करें।",
    loginErrTooManyReq: "बहुत अधिक प्रयास। कृपया कुछ मिनट प्रतीक्षा करें।",
    loginOtpSent: "OTP भेजा गया +91",

    // Dashboard
    dashWelcome: "स्वागत है,",
    dashSubtitle: "आज आप क्या करना चाहेंगे?",
    dashLogout: "लॉग आउट",
    dashCard1Title: "सरकारी योजनाएं",
    dashCard1Desc: "सरकार द्वारा किसान कल्याण योजनाएं देखें",
    dashCard2Title: "मंडी भाव",
    dashCard2Desc: "राज्य के अनुसार ताजा फसल बाजार मूल्य देखें",
    dashCard3Title: "रोग पहचान",
    dashCard3Desc: "रोग पहचानने के लिए फसल की छवि अपलोड करें",
    dashCard4Title: "किसान समुदाय",
    dashCard4Desc: "किसानों से जुड़ें, समस्याएं और समाधान साझा करें",
    dashComingSoonBadge: "जल्द आ रहा है",

    // Schemes page
    schemesTitle: "सरकारी योजनाएं",
    schemesSearchPlaceholder: "योजनाएं खोजें...",
    schemesApplyBtn: "आवेदन करें / अधिक जानें",
    schemesEligibilityLabel: "पात्रता:",
    schemesNoResults: "आपकी खोज से मेल खाती कोई योजना नहीं मिली।",

    // Market page
    marketTitle: "मंडी भाव",
    marketStateLabel: "राज्य चुनें",
    marketGetPricesBtn: "भाव देखें",
    marketFetching: "भाव प्राप्त हो रहे हैं...",
    marketColCommodity: "फसल",
    marketColMarket: "मंडी",
    marketColMin: "न्यूनतम मूल्य (₹)",
    marketColMax: "अधिकतम मूल्य (₹)",
    marketColModal: "मोडल मूल्य (₹)",
    marketColDate: "तारीख",
    marketNoData: "इस राज्य के लिए कोई डेटा नहीं मिला। दूसरा राज्य चुनें।",
    marketShowingResults: "दिख रहे हैं",
    marketResultsFor: "परिणाम",
    marketSelectPrompt: "राज्य चुनें और लाइव मंडी भाव देखने के लिए 'भाव देखें' पर क्लिक करें।",
    marketFallbackNote: "⚠️ नमूना डेटा दिखाया जा रहा है — लाइव API अभी उपलब्ध नहीं है।",
    marketFooter: "डेटा स्रोत: data.gov.in — AgMarkNet | कृषि एवं किसान कल्याण मंत्रालय",

    // Disease page
    diseaseTitle: "रोग पहचान",
    diseaseUploadInstruction: "प्रभावित फसल की पत्ती की स्पष्ट फ़ोटो अपलोड करें",
    diseaseDragDrop: "अपनी फसल की छवि यहाँ खींचें और छोड़ें",
    diseaseBrowse: "या फ़ाइलें ब्राउज़ करने के लिए क्लिक करें",
    diseaseFormats: "समर्थित: JPG, PNG, JPEG",
    diseaseAnalyzeBtn: "फसल रोग का विश्लेषण करें",
    diseaseAnalyzing: "विश्लेषण हो रहा है...",
    diseaseRecommendationLabel: "उपचार की सिफारिश",
    diseaseConfidence: "विश्वसनीयता",
    diseaseApiError: "विश्लेषण विफल रहा। कृपया पुनः प्रयास करें।",
    diseaseServerOffline: "बैकएंड सर्वर से संपर्क नहीं हो पा रहा। कृपया शुरू करें: cd disease_backend && uvicorn main:app --reload",
    diseaseInfoNote: "विश्लेषण बटन दबाने से पहले सुनिश्चित करें कि रोग पहचान बैकएंड http://127.0.0.1:8000 पर चल रहा है।",

    // Scheme names & descriptions
    scheme1Name: "PM-KISAN",
    scheme1Desc: "किसान परिवारों को 3 किस्तों में प्रति वर्ष ₹6,000 की प्रत्यक्ष आय सहायता।",
    scheme1Eligibility: "कृषि योग्य भूमि वाले लघु और सीमांत किसान।",

    scheme2Name: "PM फसल बीमा योजना",
    scheme2Desc: "प्राकृतिक आपदाओं से फसल नुकसान के खिलाफ वित्तीय सहायता प्रदान करने वाली फसल बीमा।",
    scheme2Eligibility: "अधिसूचित क्षेत्रों में अधिसूचित फसलें उगाने वाले सभी किसान।",

    scheme3Name: "किसान क्रेडिट कार्ड",
    scheme3Desc: "फसल की खेती, फसल के बाद के खर्चों और संबद्ध गतिविधियों के लिए अल्पकालिक ऋण।",
    scheme3Eligibility: "किसान, बटाईदार, किरायेदार किसान और स्वयं सहायता समूह।",

    scheme4Name: "मृदा स्वास्थ्य कार्ड योजना",
    scheme4Desc: "किसानों को पोषक तत्वों की स्थिति और उर्वरक सिफारिशों के साथ मृदा स्वास्थ्य कार्ड।",
    scheme4Eligibility: "भारत भर के सभी किसान।",

    scheme5Name: "PM कृषि सिंचाई योजना",
    scheme5Desc: "हर खेत को पानी — 'हर खेत को पानी' और 'अधिक फसल प्रति बूंद' के लक्ष्य के साथ।",
    scheme5Eligibility: "सभी किसान; जल-संकट वाले क्षेत्रों को प्राथमिकता।",

    scheme6Name: "eNAM — राष्ट्रीय कृषि बाजार",
    scheme6Desc: "किसानों को खरीदारों से सीधे जोड़ने वाला कृषि वस्तुओं के लिए ऑनलाइन ट्रेडिंग प्लेटफॉर्म।",
    scheme6Eligibility: "भारत भर के सभी पंजीकृत किसान।",

    // Community page
    communityTitle: "किसान समुदाय",
    communityCompose: "अपनी खेती की समस्या या अनुभव साझा करें...",
    communityPostBtn: "पोस्ट करें",
    communityAddPhoto: "फ़ोटो जोड़ें",
    communityTagProblem: "समस्या",
    communityTagSuggestion: "सुझाव",
    communityTagExperience: "अनुभव",
    communityTagGeneral: "सामान्य",
    communityReplyPlaceholder: "जवाब लिखें...",
    communityRepliesBtn: "जवाब दें",
    communityNoReplies: "अभी कोई जवाब नहीं। पहले आप लिखें!",
    communityEmptyFeed: "समुदाय में पहली पोस्ट आप करें!",
    communityPosting: "पोस्ट हो रहा है...",
    communityErrEmpty: "पोस्ट करने से पहले कुछ लिखें।",

    // Weather page
    weatherTitle: "मौसम",
    weatherSubtitle: "अपने खेत के स्थान का लाइव मौसम देखें",
    weatherCityLabel: "शहर / कस्बा",
    weatherCityPlaceholder: "जैसे लखनऊ",
    weatherStateLabel: "राज्य",
    weatherStatePlaceholder: "जैसे उत्तर प्रदेश",
    weatherGetBtn: "मौसम देखें",
    weatherFetching: "प्राप्त हो रहा है...",
    weatherFeelsLike: "महसूस होता है",
    weatherHumidity: "आर्द्रता",
    weatherWind: "हवा",
    weatherMaxTemp: "अधिकतम तापमान",
    weatherMinTemp: "न्यूनतम तापमान",
    weatherVisibility: "दृश्यता",
    weatherPressure: "दबाव",
    weatherSunrise: "सूर्योदय",
    weatherSunset: "सूर्यास्त",
    weatherSavedLocation: "सहेजा गया स्थान",
    weatherErrNoCity: "कृपया शहर का नाम दर्ज करें।",
    weatherErrNotFound: "शहर नहीं मिला। वर्तनी जाँचें और पुनः प्रयास करें।",
    weatherErrApi: "मौसम प्राप्त नहीं हो सका। API key जाँचें या पुनः प्रयास करें।",
    weatherTipRain: "कीटनाशक छिड़काव से बचें। बारिश रसायनों को धो देगी।",
    weatherTipThunder: "आंधी-तूफान के दौरान खेत में काम न करें। अंदर रहें।",
    weatherTipFog: "कोहरे में फंगल रोग बढ़ सकते हैं। फसल पर नजर रखें।",
    weatherTipHot: "बहुत गर्म दिन — वाष्पीकरण कम करने के लिए सुबह या शाम सिंचाई करें।",
    weatherTipCold: "ठंडा मौसम — संवेदनशील फसलों को पाले से बचाएं।",
    weatherTipHumid: "अधिक आर्द्रता — फंगल संक्रमण देखें। फसल में अच्छा वायु संचार सुनिश्चित करें।",
    weatherTipNormal: "आज खेती के लिए अच्छी स्थितियाँ हैं। खेत की गतिविधियों के लिए आदर्श।",

    // Dashboard
    dashCard5Title: "मौसम",
    dashCard5Desc: "आपके स्थान का लाइव तापमान और खेती का मौसम",
  }
};

// Current language — read from localStorage or default to English
let currentLang = localStorage.getItem('jeevikaLang') || 'en';

/**
 * Apply translations to all elements that have a data-key attribute.
 * Also refreshes placeholder attributes where data-placeholder-key is set.
 */
function applyTranslations() {
  const t = translations[currentLang];

  document.querySelectorAll('[data-key]').forEach(function (el) {
    const key = el.getAttribute('data-key');
    if (t[key] !== undefined) {
      el.textContent = t[key];
    }
  });

  document.querySelectorAll('[data-placeholder-key]').forEach(function (el) {
    const key = el.getAttribute('data-placeholder-key');
    if (t[key] !== undefined) {
      el.placeholder = t[key];
    }
  });

  document.querySelectorAll('[data-title-key]').forEach(function (el) {
    const key = el.getAttribute('data-title-key');
    if (t[key] !== undefined) {
      el.title = t[key];
    }
  });
}

/**
 * Toggle language between English and Hindi.
 * Called by the language toggle button on each page.
 */
function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'hi' : 'en';
  localStorage.setItem('jeevikaLang', currentLang);
  applyTranslations();
}

/** Helper: get a translation string by key (for use in JS-generated content) */
function t(key) {
  return (translations[currentLang] && translations[currentLang][key]) || key;
}

// Apply on load automatically
document.addEventListener('DOMContentLoaded', function () {
  applyTranslations();

  const langBtn = document.getElementById('langToggle');
  if (langBtn) {
    langBtn.addEventListener('click', toggleLanguage);
  }
});
