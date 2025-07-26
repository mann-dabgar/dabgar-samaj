// Dabgar Samaj Community App - Complete Multilingual Implementation

// Application State and Data
const SamajApp = {
  currentUser: null,
  isAdmin: false,
  currentView: 'home',
  currentDate: new Date(),
  selectedDate: null,
  currentLanguage: 'en',

  // Comprehensive translations for all languages
  translations: {
    en: {
      // Navigation & Headers
      app_title: "🎵 Dabgar Samaj Community",
      app_title_short: "🎵 Dabgar Samaj",
      login: "Login",
      register: "Register",
      logout: "Logout",
      nav_home: "Home",
      nav_directory: "Directory",
      nav_family: "Family",
      nav_calendar: "Calendar",
      nav_matrimony: "Matrimony",
      nav_jobs: "Jobs",
      nav_emergency: "Emergency",
      nav_admin: "Admin",
      nav_help: "Help",

      // Hero Section
      hero_title: "Stay United, Stay Connected",
      hero_subtitle: "Unified Digital Platform for Dabgar Samaj",
      hero_description: "Connect with your community, preserve traditions, and build stronger bonds across cities and generations.",
      stats_families: "Families",
      stats_members: "Members", 
      stats_states: "States",
      join_community: "Join Our Community",

      // Features
      app_features: "App Features",
      feature_family_title: "Family Profiles",
      feature_family_desc: "Complete family registration with member profiles and relationship mapping",
      feature_feed_title: "Community Feed",
      feature_feed_desc: "Stay connected with community updates, celebrations, and announcements",
      feature_events_title: "Events Calendar",
      feature_events_desc: "Never miss community gatherings, weddings, and cultural celebrations",
      feature_matrimony_title: "Matrimony",
      feature_matrimony_desc: "Find suitable matches within our community with privacy controls",
      feature_jobs_title: "Jobs & Business",
      feature_jobs_desc: "Discover job opportunities and promote businesses within the community",
      feature_blood_title: "Blood Donation",
      feature_blood_desc: "Emergency help network and blood donor directory for quick assistance",

      // Forms & Labels
      login_title: "Login to Your Account",
      mobile_number: "Mobile Number",
      enter_mobile: "Enter your registered mobile number",
      otp: "OTP",
      enter_otp: "Enter OTP",
      send_otp: "Send OTP",
      verify_login: "Verify & Login",
      register_family: "Register Your Family",
      family_head_name: "Family Head Name",
      enter_family_head_name: "Enter family head name",
      city: "City",
      select_city: "Select City",
      
      // Admin
      admin_access: "Admin Access",
      enter_admin_password: "Enter Admin Password",
      enter_password: "Enter password",
      access_admin_panel: "Access Admin Panel",

      // Family Registration
      register_new_family: "Register New Family",
      family_surname: "Family Surname",
      enter_family_surname: "Enter family surname",
      enter_city: "Enter city",
      family_members: "Family Members (comma separated)",
      enter_family_members: "Enter family member names separated by commas",

      // Emergency
      emergency_sos_request: "Emergency SOS Request",
      emergency_type: "Emergency Type",
      select_emergency_type: "Select Emergency Type",
      medical_emergency: "Medical Emergency",
      blood_needed: "Blood Urgently Needed",
      accident: "Accident",
      fire_emergency: "Fire Emergency",
      other: "Other",
      emergency_message: "Emergency Message",
      describe_emergency: "Describe the emergency situation",
      location: "Location",
      enter_location: "Enter location",
      contact_number: "Contact Number",
      enter_contact_number: "Enter contact number",
      send_emergency_alert: "Send Emergency Alert",

      // Events
      create_new_event: "Create New Event",
      event_title: "Event Title",
      enter_event_title: "Enter event title",
      event_date: "Event Date",
      enter_event_location: "Enter event location",
      description: "Description",
      enter_event_description: "Enter event description",
      create_event: "Create Event",

      // Actions & Others
      view_profile: "View Profile",
      edit: "Edit",
      delete: "Delete",
      save: "Save",
      cancel: "Cancel",
      submit: "Submit",
      search: "Search",
      filter: "Filter",
      apply: "Apply",
      express_interest: "Express Interest",
      share_post: "Share with Community",
      like: "Like",
      comment: "Comment",
      share: "Share",
      age: "Age",
      profession: "Profession",
      education: "Education"
    },

    hi: {
      // Navigation & Headers
      app_title: "🎵 डबगर समाज समुदाय",
      app_title_short: "🎵 डबगर समाज",
      login: "लॉगिन",
      register: "पंजीकरण",
      logout: "लॉगआउट",
      nav_home: "होम",
      nav_directory: "निर्देशिका",
      nav_family: "परिवार",
      nav_calendar: "कैलेंडर",
      nav_matrimony: "विवाह",
      nav_jobs: "नौकरी",
      nav_emergency: "आपातकाल",
      nav_admin: "एडमिन",
      nav_help: "सहायता",

      // Hero Section
      hero_title: "एकजुट रहें, जुड़े रहें",
      hero_subtitle: "डबगर समाज के लिए एकीकृत डिजिटल प्लेटफॉर्म",
      hero_description: "अपने समुदाय से जुड़ें, परंपराओं को संरक्षित करें, और शहरों और पीढ़ियों में मजबूत बंधन बनाएं।",
      stats_families: "परिवार",
      stats_members: "सदस्य",
      stats_states: "राज्य",
      join_community: "हमारे समुदाय से जुड़ें",

      // Features
      app_features: "ऐप सुविधाएं",
      feature_family_title: "पारिवारिक प्रोफाइल",
      feature_family_desc: "सदस्य प्रोफाइल और रिश्ते की मैपिंग के साथ पूर्ण पारिवारिक पंजीकरण",
      feature_feed_title: "सामुदायिक फीड",
      feature_feed_desc: "समुदाय के अपडेट, समारोह और घोषणाओं से जुड़े रहें",
      feature_events_title: "कार्यक्रम कैलेंडर",
      feature_events_desc: "सामुदायिक सभाओं, शादी-विवाह और सांस्कृतिक समारोहों को न चूकें",
      feature_matrimony_title: "विवाह",
      feature_matrimony_desc: "गोपनीयता नियंत्रण के साथ हमारे समुदाय में उपयुक्त मैच खोजें",
      feature_jobs_title: "नौकरी और व्यापार",
      feature_jobs_desc: "समुदाय के भीतर नौकरी के अवसर खोजें और व्यापार को बढ़ावा दें",
      feature_blood_title: "रक्तदान",
      feature_blood_desc: "त्वरित सहायता के लिए आपातकालीन सहायता नेटवर्क और रक्तदाता निर्देशिका",

      // Forms & Labels
      login_title: "अपने खाते में लॉगिन करें",
      mobile_number: "मोबाइल नंबर",
      enter_mobile: "अपना पंजीकृत मोबाइल नंबर दर्ज करें",
      otp: "ओटीपी",
      enter_otp: "ओटीपी दर्ज करें",
      send_otp: "ओटीपी भेजें",
      verify_login: "सत्यापित करें और लॉगिन करें",
      register_family: "अपने परिवार का पंजीकरण करें",
      family_head_name: "परिवार के मुखिया का नाम",
      enter_family_head_name: "परिवार के मुखिया का नाम दर्ज करें",
      city: "शहर",
      select_city: "शहर चुनें",

      // Admin
      admin_access: "एडमिन पहुंच",
      enter_admin_password: "एडमिन पासवर्ड दर्ज करें",
      enter_password: "पासवर्ड दर्ज करें",
      access_admin_panel: "एडमिन पैनल तक पहुंच",

      // Family Registration
      register_new_family: "नया परिवार पंजीकृत करें",
      family_surname: "पारिवारिक उपनाम",
      enter_family_surname: "पारिवारिक उपनाम दर्ज करें",
      enter_city: "शहर दर्ज करें",
      family_members: "परिवार के सदस्य (अल्पविराम से अलग)",
      enter_family_members: "अल्पविराम से अलग करके परिवार के सदस्यों के नाम दर्ज करें",

      // Emergency
      emergency_sos_request: "आपातकालीन एसओएस अनुरोध",
      emergency_type: "आपातकाल का प्रकार",
      select_emergency_type: "आपातकाल का प्रकार चुनें",
      medical_emergency: "चिकित्सा आपातकाल",
      blood_needed: "रक्त की तत्काल आवश्यकता",
      accident: "दुर्घटना",
      fire_emergency: "अग्नि आपातकाल",
      other: "अन्य",
      emergency_message: "आपातकालीन संदेश",
      describe_emergency: "आपातकालीन स्थिति का वर्णन करें",
      location: "स्थान",
      enter_location: "स्थान दर्ज करें",
      contact_number: "संपर्क नंबर",
      enter_contact_number: "संपर्क नंबर दर्ज करें",
      send_emergency_alert: "आपातकालीन अलर्ट भेजें",

      // Events
      create_new_event: "नया कार्यक्रम बनाएं",
      event_title: "कार्यक्रम का शीर्षक",
      enter_event_title: "कार्यक्रम का शीर्षक दर्ज करें",
      event_date: "कार्यक्रम की तारीख",
      enter_event_location: "कार्यक्रम का स्थान दर्ज करें",
      description: "विवरण",
      enter_event_description: "कार्यक्रम का विवरण दर्ज करें",
      create_event: "कार्यक्रम बनाएं",

      // Actions & Others
      view_profile: "प्रोफ़ाइल देखें",
      edit: "संपादित करें",
      delete: "हटाएं",
      save: "सेव करें",
      cancel: "रद्द करें",
      submit: "सबमिट करें",
      search: "खोजें",
      filter: "फ़िल्टर",
      apply: "आवेदन करें",
      express_interest: "रुचि व्यक्त करें",
      share_post: "पोस्ट साझा करें",
      like: "पसंद",
      comment: "टिप्पणी",
      share: "साझा करें",
      age: "आयु",
      profession: "पेशा",
      education: "शिक्षा"
    },

    gu: {
      // Navigation & Headers
      app_title: "🎵 ડબગર સમાજ સમુદાય",
      app_title_short: "🎵 ડબગર સમાજ",
      login: "લૉગિન",
      register: "નોંધણી",
      logout: "લૉગઆઉટ",
      nav_home: "હોમ",
      nav_directory: "ડિરેક્ટરી",
      nav_family: "કુટુંબ",
      nav_calendar: "કેલેન્ડર",
      nav_matrimony: "લગ્ન",
      nav_jobs: "નોકરી",
      nav_emergency: "કટોકટી",
      nav_admin: "એડમિન",
      nav_help: "મદદ",

      // Hero Section
      hero_title: "એકજુટ રહો, જોડાયેલા રહો",
      hero_subtitle: "ડબગર સમાજ માટે એકીકૃત ડિજિટલ પ્લેટફોર્મ",
      hero_description: "તમારા સમુદાય સાથે જોડાઓ, પરંપરાઓ સાચવો, અને શહેરો અને પેઢીઓમાં મજબૂત બંધન બનાવો.",
      stats_families: "કુટુંબો",
      stats_members: "સભ્યો",
      stats_states: "રાજ્યો",
      join_community: "અમારા સમુદાયમાં જોડાઓ",

      // Features
      app_features: "એપ્લિકેશન સુવિધાઓ",
      feature_family_title: "કૌટુંબિક પ્રોફાઇલ",
      feature_family_desc: "સભ્ય પ્રોફાઇલ અને સંબંધ મેપિંગ સાથે સંપૂર્ણ કૌટુંબિક નોંધણી",
      feature_feed_title: "સામુદાયિક ફીડ",
      feature_feed_desc: "સમુદાયના અપડેટ્સ, ઉત્સવો અને જાહેરાતો સાથે જોડાયેલા રહો",
      feature_events_title: "ઇવેન્ટ્સ કેલેન્ડર",
      feature_events_desc: "સામુદાયિક મેળાવડા, લગ્ન અને સાંસ્કૃતિક ઉત્સવો ચૂકશો નહીં",
      feature_matrimony_title: "લગ્ન",
      feature_matrimony_desc: "ગોપનીયતા નિયંત્રણો સાથે અમારા સમુદાયમાં યોગ્ય મેચ શોધો",
      feature_jobs_title: "નોકરી અને ધંધો",
      feature_jobs_desc: "સમુદાયમાં નોકરીની તકો શોધો અને ધંધાઓને પ્રોત્સાહન આપો",
      feature_blood_title: "રક્તદાન",
      feature_blood_desc: "ત્વરિત સહાય માટે કટોકટીની સહાય નેટવર્ક અને રક્તદાતા ડિરેક્ટરી",

      // Forms & Labels
      login_title: "તમારા એકાઉન્ટમાં લૉગિન કરો",
      mobile_number: "મોબાઇલ નંબર",
      enter_mobile: "તમારો નોંધાયેલ મોબાઇલ નંબર દાખલ કરો",
      otp: "ઓટીપી",
      enter_otp: "ઓટીપી દાખલ કરો",
      send_otp: "ઓટીપી મોકલો",
      verify_login: "ચકાસો અને લૉગિન કરો",
      register_family: "તમારા કુટુંબની નોંધણી કરો",
      family_head_name: "કુટુંબના મુખિયાનું નામ",
      enter_family_head_name: "કુટુંબના મુખિયાનું નામ દાખલ કરો",
      city: "શહેર",
      select_city: "શહેર પસંદ કરો",

      // Admin
      admin_access: "એડમિન પ્રવેશ",
      enter_admin_password: "એડમિન પાસવર્ડ દાખલ કરો",
      enter_password: "પાસવર્ડ દાખલ કરો",
      access_admin_panel: "એડમિન પેનલ પ્રવેશ",

      // Family Registration
      register_new_family: "નવા કુટુંબની નોંધણી કરો",
      family_surname: "કૌટુંબિક અટક",
      enter_family_surname: "કૌટુંબિક અટક દાખલ કરો",
      enter_city: "શહેર દાખલ કરો",
      family_members: "કુટુંબના સભ્યો (અલ્પવિરામથી અલગ)",
      enter_family_members: "અલ્પવિરામથી અલગ કરીને કુટુંબના સભ્યોના નામ દાખલ કરો",

      // Emergency
      emergency_sos_request: "કટોકટી એસઓએસ વિનંતી",
      emergency_type: "કટોકટીનો પ્રકાર",
      select_emergency_type: "કટોકટીનો પ્રકાર પસંદ કરો",
      medical_emergency: "તબીબી કટોકટી",
      blood_needed: "લોહીની તાત્કાલિક જરૂર",
      accident: "અકસ્માત",
      fire_emergency: "આગની કટોકટી",
      other: "અન્ય",
      emergency_message: "કટોકટીનો સંદેશ",
      describe_emergency: "કટોકટીની પરિસ્થિતિનું વર્ણન કરો",
      location: "સ્થાન",
      enter_location: "સ્થાન દાખલ કરો",
      contact_number: "સંપર્ક નંબર",
      enter_contact_number: "સંપર્ક નંબર દાખલ કરો",
      send_emergency_alert: "કટોકટીની ચેતવણી મોકલો",

      // Events
      create_new_event: "નવો કાર્યક્રમ બનાવો",
      event_title: "કાર્યક્રમનું શીર્ષક",
      enter_event_title: "કાર્યક્રમનું શીર્ષક દાખલ કરો",
      event_date: "કાર્યક્રમની તારીખ",
      enter_event_location: "કાર્યક્રમનું સ્થાન દાખલ કરો",
      description: "વર્ણન",
      enter_event_description: "કાર્યક્રમનું વર્ણન દાખલ કરો",
      create_event: "કાર્યક્રમ બનાવો",

      // Actions & Others
      view_profile: "પ્રોફાઇલ જુઓ",
      edit: "સંપાદન કરો",
      delete: "ડિલીટ કરો",
      save: "સેવ કરો",
      cancel: "રદ કરો",
      submit: "સબમિટ કરો",
      search: "શોધો",
      filter: "ફિલ્ટર",
      apply: "અરજી કરો",
      express_interest: "રુચિ દર્શાવો",
      share_post: "પોસ્ટ શેર કરો",
      like: "પસંદ",
      comment: "ટિપ્પણી",
      share: "શેર કરો",
      age: "ઉમર",
      profession: "વ્યવસાય",
      education: "શિક્ષણ"
    }
  },

  // Data Arrays - Enhanced with multilingual support
  data: {
    members: [
      {
        id: 1,
        familyId: 1,
        name: {en: "Ramesh Dabgar", hi: "रमेश डबगर", gu: "રમેશ ડબગર"},
        dob: "1980-01-10",
        city: {en: "Lunawada", hi: "लूणावाडा", gu: "લૂણાવાડા"},
        blood: "B+",
        profession: {en: "Teacher", hi: "शिक्षक", gu: "શિક્ષક"}, 
        education: "MA",
        relationship: {en: "Father", hi: "पिता", gu: "પિતા"},
        phone: "+91-98765-43210"
      },
      {
        id: 2,
        familyId: 1,
        name: {en: "Sita Dabgar", hi: "सीता डबगर", gu: "સીતા ડબગર"},
        dob: "1985-03-05", 
        city: {en: "Lunawada", hi: "लूणावाडा", gu: "લૂણાવાડા"},
        blood: "O+",
        profession: {en: "Homemaker", hi: "गृहिणी", gu: "ગૃહિણી"},
        education: "BA",
        relationship: {en: "Mother", hi: "माता", gu: "માતા"},
        phone: "+91-98765-43211"
      },
      {
        id: 3,
        familyId: 1,
        name: {en: "Rahul Dabgar", hi: "राहुल डबगर", gu: "રાહુલ ડબગર"},
        dob: "2004-07-19",
        city: {en: "Lunawada", hi: "लूणावाडा", gu: "લૂણાવાડા"}, 
        blood: "A+",
        profession: {en: "Student", hi: "छात्र", gu: "વિદ્યાર્થી"},
        education: "BSc",
        relationship: {en: "Son", hi: "पुत्र", gu: "પુત્ર"},
        phone: "+91-98765-43212"
      },
      {
        id: 4,
        familyId: 2,
        name: {en: "Suresh Dabgar", hi: "सुरेश डबगर", gu: "સુરેશ ડબગર"},
        dob: "1975-05-12",
        city: {en: "Ahmedabad", hi: "अहमदाबाद", gu: "અમદાવાદ"},
        blood: "AB+",
        profession: {en: "Business Owner", hi: "व्यापारी", gu: "ધંધાદારી"},
        education: "B.Com",
        relationship: {en: "Father", hi: "पिता", gu: "પિતા"},
        phone: "+91-98765-43213"
      },
      {
        id: 5,
        familyId: 2,
        name: {en: "Priya Dabgar", hi: "प्रिया डबगर", gu: "પ્રિયા ડબગર"}, 
        dob: "1990-08-25",
        city: {en: "Surat", hi: "सूरत", gu: "સુરત"},
        blood: "B-",
        profession: {en: "Software Engineer", hi: "सॉफ्टवेयर इंजीनियर", gu: "સોફ્ટવેર એન્જિનિયર"},
        education: "B.Tech",
        relationship: {en: "Daughter", hi: "पुत्री", gu: "પુત્રી"},
        phone: "+91-98765-43214"
      }
    ],

    families: [
      {
        id: 1,
        surname: {en: "Dabgar", hi: "डबगर", gu: "ડબગર"},
        city: {en: "Lunawada", hi: "लूणावाडा", gu: "લૂણાવાડા"}, 
        headId: 1,
        members: [
          {en: "Ramesh Dabgar", hi: "रमेश डबगर", gu: "રમેશ ડબગર"}, 
          {en: "Sita Dabgar", hi: "सीता डबगर", gu: "સીતા ડબગર"}, 
          {en: "Rahul Dabgar", hi: "राहुल डबगर", gu: "રાહુલ ડબગર"}
        ]
      },
      {
        id: 2,
        surname: {en: "Dabgar", hi: "डबगर", gu: "ડબગર"},
        city: {en: "Ahmedabad", hi: "अहमदाबाद", gu: "અમદાવાદ"},
        headId: 4, 
        members: [
          {en: "Suresh Dabgar", hi: "सुरेश डबगर", gu: "સુરેશ ડબગર"}, 
          {en: "Meera Dabgar", hi: "मीरा डबगर", gu: "મીરા ડબગર"}, 
          {en: "Priya Dabgar", hi: "प्रिया डबगर", gu: "પ્રિયા ડબગર"}
        ]
      }
    ],

    events: [
      {
        id: 1,
        type: "Post",
        title: {en: "Happy Navratri to all!", hi: "सभी को नवरात्रि की शुभकामनाएं!", gu: "બધાને નવરાત્રિની શુભકામનાઓ!"},
        date: "2025-10-05",
        authorId: 1,
        description: {en: "Wishing everyone a blessed Navratri celebration!", hi: "सभी को धन्य नवरात्रि उत्सव की कामना!", gu: "બધાને આશીર્વાદિત નવરાત્રિ ઉત્સવની કામના!"}
      },
      {
        id: 2,
        type: "Wedding", 
        title: {en: "Wedding of Rahul & Sneha", hi: "राहुल और स्नेहा का विवाह", gu: "રાહુલ અને સ્નેહાનું લગ્ન"},
        date: "2025-12-10",
        location: {en: "Ahmedabad", hi: "अहमदाबाद", gu: "અમદાવાદ"},
        familyId: 1,
        description: {en: "Join us for this auspicious occasion", hi: "इस शुभ अवसर पर हमारे साथ जुड़ें", gu: "આ શુભ અવસરે અમારી સાથે જોડાઓ"}
      },
      {
        id: 3,
        type: "Community",
        title: {en: "Annual Samaj Meet", hi: "वार्षिक समाज मिलन", gu: "વાર્ષિક સમાજ મિલન"},
        date: "2025-08-15",
        location: {en: "Community Hall, Vadodara", hi: "सामुदायिक हॉल, वडोदरा", gu: "કોમ્યુનિટી હોલ, વડોદરા"},
        description: {en: "Annual community gathering and cultural program", hi: "वार्षिक सामुदायिक सभा और सांस्कृतिक कार्यक्रम", gu: "વાર્ષિક સામુदાયિક મેળાવડો અને સાંસ્કૃતિક કાર્યક્રમ"}
      }
    ],

    matrimony: [
      {
        id: 1,
        memberId: 3,
        gender: {en: "Male", hi: "पुरुष", gu: "પુરુષ"},
        age: 21,
        education: "BSc",
        job: {en: "Software Trainee", hi: "सॉफ्टवेयर प्रशिक्षु", gu: "સોફ્ટવેર ટ્રેઇની"}, 
        city: {en: "Ahmedabad", hi: "अहमदाबाद", gu: "અમદાવાદ"},
        caste: {en: "Dabgar", hi: "डबगर", gu: "ડબગર"},
        height: "5'8\"",
        lookingFor: {en: "Well-educated, family-oriented girl from Dabgar community", hi: "डबगर समुदाय की सुशिक्षित, पारिवारिक लड़की", gu: "ડબગર સમુદાયની સુશિક્ષિત, કૌટુંબિક છોકરી"}
      }
    ],

    jobs: [
      {
        id: 1,
        title: {en: "Sales Executive", hi: "बिक्री कार्यकारी", gu: "સેલ્સ એક્ઝિક્યુટિવ"},
        company: {en: "Samaj Trading", hi: "समाज ट्रेडिंग", gu: "સમાજ ટ્રેડિંગ"},
        location: {en: "Surat", hi: "सूरत", gu: "સુરત"},
        posterId: 1,
        type: {en: "Full-time", hi: "पूर्णकालिक", gu: "પૂર્ણકાલિક"},
        salary: "₹20,000 - ₹30,000",
        description: {en: "Looking for experienced sales professional for expanding business", hi: "विस्तारित व्यापार के लिए अनुभवी बिक्री पेशेवर की तलाश", gu: "વિસ્તૃત ધંધા માટે અનુભવી સેલ્સ પ્રોફેશનલની શોધ"}
      }
    ],

    bloodDonors: [
      {
        memberId: 2,
        blood: "O+",
        city: {en: "Lunawada", hi: "लूणावाडा", gu: "લૂણાવાડા"}, 
        phone: "9999999999",
        name: {en: "Sita Dabgar", hi: "सीता डबगर", gu: "સીતા ડબગર"},
        available: true,
        lastDonation: "2025-05-15"
      },
      {
        memberId: 1,
        blood: "B+",
        city: {en: "Lunawada", hi: "लूणावाडा", gu: "લૂણાવાડા"},
        phone: "9999999998", 
        name: {en: "Ramesh Dabgar", hi: "रमेश डबगर", gu: "રમેશ ડબગર"},
        available: true,
        lastDonation: "2025-04-20"
      }
    ],

    posts: [
      {
        id: 1,
        authorId: 1,
        content: {
          en: "Proud to announce our community's traditional music has been recognized! 🎵",
          hi: "गर्व से घोषणा करते हैं कि हमारे समुदाय के पारंपरिक संगीत को मान्यता मिली है! 🎵",
          gu: "ગર્વથી જાહેર કરવું કે અમારા સમુદાયના પરંપરાગત સંગીતને માન્યતા મળી છે! 🎵"
        },
        timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
        likes: 15,
        liked: false,
        type: "achievement"
      },
      {
        id: 2, 
        authorId: 4,
        content: {
          en: "Looking forward to our Annual Samaj Meet. Let's celebrate our heritage together! 🎉",
          hi: "हमारे वार्षिक समाज मिलन की प्रतीक्षा कर रहे हैं। आइए अपनी विरासत को एक साथ मनाते हैं! 🎉",
          gu: "અમારા વાર્ષિક સમાજ મિલનની રાહ જોઈ રહ્યા છીએ. ચાલો અમારા વારસાની એક સાથે ઉજવણી કરીએ! 🎉"
        },
        timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000),
        likes: 23,
        liked: true,
        type: "announcement" 
      }
    ]
  },

  // Initialize the application
  init() {
    this.loadLanguagePreference();
    this.setupEventListeners();
    this.setupRouting();
    this.updateLanguage();
    console.log('Dabgar Samaj Community App Initialized with Multilingual Support');
  },

  // Language switching functionality
  loadLanguagePreference() {
    const savedLang = localStorage.getItem('dabgar_samaj_language');
    if (savedLang && this.translations[savedLang]) {
      this.currentLanguage = savedLang;
    } else {
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith('hi')) {
        this.currentLanguage = 'hi';
      } else if (browserLang.startsWith('gu')) {
        this.currentLanguage = 'gu';
      } else {
        this.currentLanguage = 'en';
      }
    }
  },

  switchLanguage(lang) {
    if (this.translations[lang]) {
      this.currentLanguage = lang;
      localStorage.setItem('dabgar_samaj_language', lang);
      this.updateLanguage();
      
      // Update language buttons
      document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
          btn.classList.add('active');
        }
      });

      // Refresh current view with new language
      if (this.currentUser && this.currentView) {
        this.renderView(this.currentView);
      }
    }
  },

  updateLanguage() {
    // Update document language and font class
    document.documentElement.lang = this.currentLanguage;
    document.body.className = `lang-${this.currentLanguage}`;

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      if (this.translations[this.currentLanguage][key]) {
        element.textContent = this.translations[this.currentLanguage][key];
      }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
      const key = element.getAttribute('data-i18n-placeholder');
      if (this.translations[this.currentLanguage][key]) {
        element.placeholder = this.translations[this.currentLanguage][key];
      }
    });

    // Update active language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.remove('active');
      if (btn.getAttribute('data-lang') === this.currentLanguage) {
        btn.classList.add('active');
      }
    });
  },

  // Helper method to get translated text
  t(key) {
    return this.translations[this.currentLanguage][key] || key;
  },

  // Helper method to get multilingual data
  getLocalizedText(obj) {
    if (typeof obj === 'object' && obj[this.currentLanguage]) {
      return obj[this.currentLanguage];
    }
    return obj;
  },

  // Event Listeners Setup
  setupEventListeners() {
    // Modal close handlers
    document.querySelectorAll('.modal').forEach(modal => {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.classList.add('hidden');
        }
      });
    });

    // Form submissions
    this.setupFormHandlers();
    
    // Navigation
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', (e) => {
        const section = e.target.getAttribute('data-section');
        window.location.hash = section;
      });
    });
  },

  // Hash-based routing
  setupRouting() {
    window.addEventListener('hashchange', () => this.handleHashChange());
  },

  handleHashChange() {
    const hash = window.location.hash.replace('#', '');
    if (hash && this.currentUser) {
      this.currentView = hash;
      this.renderView(hash);
      this.updateNavigation(hash);
    }
  },

  updateNavigation(activeSection) {
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('data-section') === activeSection) {
        link.classList.add('active');
      }
    });
  },

  // Main view rendering
  renderView(viewName) {
    const viewContainer = document.getElementById('view');
    if (!viewContainer) return;

    switch(viewName) {
      case 'home':
        this.renderHomeView();
        break;
      case 'directory': 
        this.renderDirectoryView();
        break;
      case 'family':
        this.renderFamilyView();
        break;
      case 'calendar':
        this.renderCalendarView();
        break;
      case 'matrimony':
        this.renderMatrimonyView();
        break;
      case 'jobs':
        this.renderJobsView();
        break;
      case 'emergency':
        this.renderEmergencyView();
        break;
      case 'admin':
        this.renderAdminView();
        break;
      case 'help':
        this.renderHelpView();
        break;
      default:
        this.renderHomeView();
    }
  },

  // View renderers with multilingual support
  renderHomeView() {
    const view = document.getElementById('view');
    view.innerHTML = `
      <div class="container">
        <div class="feed-layout">
          <div class="feed-main">
            <div class="post-composer">
              <h3>${this.t('share_post')}</h3>
              <textarea class="form-control" id="new-post" placeholder="${this.t('share_post')}..."></textarea>
              <div class="post-actions">
                <button class="btn btn--primary" onclick="SamajApp.createPost()">${this.t('share_post')}</button>
              </div>
            </div>
            <div class="feed-posts" id="feed-posts">
              ${this.renderPosts()}
            </div>
          </div>
          <div class="feed-sidebar">
            <div class="card">
              <div class="card__body">
                <h4>${this.t('nav_calendar')}</h4>
                <div class="event-preview" id="upcoming-events">
                  ${this.renderUpcomingEvents()}
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card__body">
                <h4>${this.t('stats_members')}</h4>
                <div class="stats-grid">
                  <div class="stat-item">
                    <span class="stat-value">${this.data.members.length}</span>
                    <span class="stat-label">${this.t('stats_members')}</span>
                  </div>
                  <div class="stat-item">
                    <span class="stat-value">${this.data.families.length}</span>
                    <span class="stat-label">${this.t('stats_families')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  renderDirectoryView() {
    const view = document.getElementById('view');
    view.innerHTML = `
      <div class="container">
        <div class="section-header">
          <h2>${this.t('nav_directory')}</h2>
        </div>
        <div class="search-filters">
          <input type="text" class="form-control" id="member-search" placeholder="${this.t('search')}...">
          <select class="form-control" id="blood-filter">
            <option value="">${this.t('filter')} - Blood Group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>
          <select class="form-control" id="city-filter">
            <option value="">${this.t('filter')} - ${this.t('city')}</option>
            <option value="Lunawada">${this.getLocalizedText({en: "Lunawada", hi: "लूणावाडा", gu: "લૂણાવાડા"})}</option>
            <option value="Ahmedabad">${this.getLocalizedText({en: "Ahmedabad", hi: "अहमदाबाद", gu: "અમદાવાદ"})}</option>
            <option value="Surat">${this.getLocalizedText({en: "Surat", hi: "सूरत", gu: "સુરત"})}</option>
          </select>
        </div>
        <div class="members-grid" id="members-grid">
          ${this.renderMembers()}
        </div>
      </div>
    `;
    
    this.setupMemberSearch();
  },

  renderFamilyView() {
    const view = document.getElementById('view');
    view.innerHTML = `
      <div class="container">
        <div class="section-header">
          <h2>${this.t('nav_family')}</h2>
          <button class="btn btn--primary" onclick="SamajApp.showModal('family-register-modal')">${this.t('register_new_family')}</button>
        </div>
        <div class="family-grid">
          ${this.renderFamilies()}
        </div>
      </div>
    `;
  },

  renderCalendarView() {
    const view = document.getElementById('view');
    view.innerHTML = `
      <div class="container">
        <div class="section-header">
          <h2>${this.t('nav_calendar')}</h2>
          <button class="btn btn--primary" onclick="SamajApp.showModal('create-event-modal')">${this.t('create_new_event')}</button>
        </div>
        <div class="events-grid">
          ${this.renderEvents()}
        </div>
      </div>
    `;
  },

  renderMatrimonyView() {
    const view = document.getElementById('view');
    view.innerHTML = `
      <div class="container">
        <div class="section-header">
          <h2>${this.t('nav_matrimony')}</h2>
        </div>
        <div class="matrimony-grid">
          ${this.renderMatrimonyProfiles()}
        </div>
      </div>
    `;
  },

  renderJobsView() {
    const view = document.getElementById('view');
    view.innerHTML = `
      <div class="container">
        <div class="section-header">
          <h2>${this.t('nav_jobs')}</h2>
        </div>
        <div class="jobs-grid">
          ${this.renderJobs()}
        </div>
      </div>
    `;
  },

  renderEmergencyView() {
    const view = document.getElementById('view');
    view.innerHTML = `
      <div class="container">
        <div class="emergency-header">
          <h2>🚨 ${this.t('nav_emergency')}</h2>
          <p>${this.t('feature_blood_desc')}</p>
        </div>
        <div class="emergency-buttons">
          <button class="emergency-btn" onclick="SamajApp.showModal('emergency-sos-modal')">
            🚨 ${this.t('send_emergency_alert')}
          </button>
          <button class="emergency-btn" onclick="SamajApp.callEmergency('108')">
            📞 Call 108 Ambulance
          </button>
        </div>
        <div class="blood-donor-search">
          <h3>${this.t('blood_needed')}</h3>
          <div class="blood-filters">
            <select class="form-control" id="blood-group-search">
              <option value="">Select Blood Group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>
            <select class="form-control" id="city-blood-search">
              <option value="">${this.t('city')}</option>
              <option value="Lunawada">${this.getLocalizedText({en: "Lunawada", hi: "लूणावाडा", gu: "લૂણાવાડા"})}</option>
              <option value="Ahmedabad">${this.getLocalizedText({en: "Ahmedabad", hi: "अहमदाबाद", gu: "અમદાવાદ"})}</option>
              <option value="Surat">${this.getLocalizedText({en: "Surat", hi: "सूरत", gu: "સુરત"})}</option>
            </select>
            <button class="btn btn--primary" onclick="SamajApp.searchBloodDonors()">${this.t('search')}</button>
          </div>
        </div>
        <div class="blood-donors" id="blood-donors">
          ${this.renderBloodDonors()}
        </div>
      </div>
    `;
  },

  renderAdminView() {
    if (!this.isAdmin) {
      this.showModal('admin-password-modal');
      return;
    }

    const view = document.getElementById('view');
    view.innerHTML = `
      <div class="container">
        <div class="section-header">
          <h2>${this.t('nav_admin')}</h2>
          <button class="btn btn--outline" onclick="SamajApp.logoutAdmin()">${this.t('logout')} Admin</button>
        </div>
        <div class="admin-panel">
          <h3>Manage Community</h3>
          <p>Admin functionality for managing members, events, and community features.</p>
        </div>
      </div>
    `;
  },

  renderHelpView() {
    const view = document.getElementById('view');
    view.innerHTML = `
      <div class="container">
        <h2>${this.t('nav_help')}</h2>
        
        <div class="help-section">
          <h3>How to Use the App</h3>
          <ul>
            <li>Switch languages using the language buttons in the header</li>
            <li>Browse community members in the Directory section</li>
            <li>Share updates in the Home feed</li>
            <li>View upcoming events in the Calendar</li>
            <li>Find matrimony matches in the Matrimony section</li>
            <li>Search for job opportunities in Jobs section</li>
            <li>Use Emergency section for urgent help and blood donors</li>
          </ul>
        </div>

        <div class="help-section">
          <h3>Contact Support</h3>
          <p>For technical support or community inquiries:</p>
          <ul>
            <li>Email: admin@dabgarsamaj.org</li>
            <li>WhatsApp: +91-98765-43210</li>
            <li>Community Hall: Samaj Bhavan, Lunawada</li>
          </ul>
        </div>
      </div>
    `;
  },

  // Helper rendering methods
  renderPosts() {
    return this.data.posts.map(post => {
      const author = this.data.members.find(m => m.id === post.authorId);
      const timeAgo = this.getTimeAgo(post.timestamp);
      const authorName = author ? this.getLocalizedText(author.name) : 'Community Member';
      const content = this.getLocalizedText(post.content);
      
      return `
        <div class="post">
          <div class="post-header">
            <div class="post-avatar">${this.getInitials(authorName)}</div>
            <div class="post-author">${authorName}</div>
            <div class="post-time">${timeAgo}</div>
          </div>
          <div class="post-content">${content}</div>
          <div class="post-actions">
            <button class="post-action ${post.liked ? 'liked' : ''}" onclick="SamajApp.toggleLike(${post.id})">
              ❤️ ${post.likes}
            </button>
            <button class="post-action">💬 ${this.t('comment')}</button>
            <button class="post-action">📤 ${this.t('share')}</button>
          </div>
        </div>
      `;
    }).join('');
  },

  renderUpcomingEvents() {
    const upcomingEvents = this.data.events
      .filter(event => new Date(event.date) >= new Date())
      .slice(0, 3);
    
    return upcomingEvents.map(event => `
      <div class="event-preview-item">
        <div class="event-preview-date">${this.formatDate(event.date)}</div>
        <h4 class="event-preview-title">${this.getLocalizedText(event.title)}</h4>
      </div>
    `).join('');
  },

  renderEvents() {
    return this.data.events.map(event => `
      <div class="event-card">
        <div class="event-header">
          <div class="event-date">${this.formatDate(event.date)}</div>
          <h3 class="event-title">${this.getLocalizedText(event.title)}</h3>
          <div class="event-location">📍 ${this.getLocalizedText(event.location) || ''}</div>
        </div>
        <div class="event-body">
          <div class="event-description">${this.getLocalizedText(event.description)}</div>
        </div>
      </div>
    `).join('');
  },

  renderMembers() {
    return this.data.members.map(member => {
      const age = this.calculateAge(member.dob);
      const name = this.getLocalizedText(member.name);
      const city = this.getLocalizedText(member.city);
      const profession = this.getLocalizedText(member.profession);
      
      return `
        <div class="member-card">
          <div class="member-header">
            <div class="member-avatar">${this.getInitials(name)}</div>
            <div class="member-info">
              <h3>${name}</h3>
              <div class="member-location">📍 ${city}</div>
            </div>
          </div>
          <div class="member-details">
            <div class="member-detail">
              <strong>${this.t('age')}:</strong> <span>${age} years</span>
            </div>
            <div class="member-detail">
              <strong>Blood:</strong> <span>${member.blood}</span>
            </div>
            <div class="member-detail">
              <strong>${this.t('profession')}:</strong> <span>${profession}</span>
            </div>
            <div class="member-detail">
              <strong>${this.t('education')}:</strong> <span>${member.education}</span>
            </div>
          </div>
          <div class="member-actions">
            <button class="btn btn--primary btn--sm" onclick="SamajApp.viewMemberProfile(${member.id})">${this.t('view_profile')}</button>
          </div>
        </div>
      `;
    }).join('');
  },

  renderFamilies() {
    return this.data.families.map(family => {
      const head = this.data.members.find(m => m.id === family.headId);
      const surname = this.getLocalizedText(family.surname);
      const city = this.getLocalizedText(family.city);
      const headName = head ? this.getLocalizedText(head.name) : 'Not specified';
      
      return `
        <div class="family-card">
          <div class="family-header">
            <h3 class="family-name">${surname} Family</h3>
            <div class="family-city">📍 ${city}</div>
          </div>
          <div class="family-head">
            <strong>Family Head:</strong> ${headName}
          </div>
          <div class="family-members">
            <h4>Family Members:</h4>
            <ul>
              ${family.members.map(member => `<li>${this.getLocalizedText(member)}</li>`).join('')}
            </ul>
          </div>
        </div>
      `;
    }).join('');
  },

  renderMatrimonyProfiles() {
    return this.data.matrimony.map(profile => {
      const member = this.data.members.find(m => m.id === profile.memberId);
      const name = member ? this.getLocalizedText(member.name) : 'Member';
      const city = this.getLocalizedText(profile.city);
      const job = this.getLocalizedText(profile.job);
      const lookingFor = this.getLocalizedText(profile.lookingFor);
      
      return `
        <div class="matrimony-card">
          <div class="matrimony-header">
            <div class="matrimony-avatar">${this.getInitials(name)}</div>
            <h3 class="matrimony-name">${name}</h3>
            <div class="matrimony-age">${profile.age} years, ${city}</div>
          </div>
          <div class="matrimony-details">
            <div class="matrimony-detail">
              <strong>${this.t('education')}:</strong> <span>${profile.education}</span>
            </div>
            <div class="matrimony-detail">
              <strong>${this.t('profession')}:</strong> <span>${job}</span>
            </div>
            <div class="matrimony-detail">
              <strong>Height:</strong> <span>${profile.height}</span>
            </div>
          </div>
          <div class="matrimony-looking">
            <strong>Looking for:</strong> ${lookingFor}
          </div>
          <div class="matrimony-actions">
            <button class="btn btn--primary btn--sm btn--full-width" onclick="SamajApp.expressInterest(${profile.id})">${this.t('express_interest')}</button>
          </div>
        </div>
      `;
    }).join('');
  },

  renderJobs() {
    return this.data.jobs.map(job => {
      const poster = this.data.members.find(m => m.id === job.posterId);
      const title = this.getLocalizedText(job.title);
      const company = this.getLocalizedText(job.company);
      const location = this.getLocalizedText(job.location);
      const type = this.getLocalizedText(job.type);
      const description = this.getLocalizedText(job.description);
      const posterName = poster ? this.getLocalizedText(poster.name) : 'Community Member';
      
      return `
        <div class="job-card">
          <div class="job-header">
            <h3 class="job-title">${title}</h3>
            <div class="job-company">${company} • ${location}</div>
          </div>
          <div class="job-details">
            <div class="job-detail">
              <strong>Type:</strong> <span>${type}</span>
            </div>
            <div class="job-detail">
              <strong>Salary:</strong> <span>${job.salary}</span>
            </div>
          </div>
          <div class="job-description">${description}</div>
          <div class="job-footer">
            <div class="job-posted-by">Posted by: ${posterName}</div>
            <button class="btn btn--primary btn--sm" onclick="SamajApp.applyJob(${job.id})">${this.t('apply')}</button>
          </div>
        </div>
      `;
    }).join('');
  },

  renderBloodDonors() {
    return this.data.bloodDonors.map(donor => {
      const name = this.getLocalizedText(donor.name);
      const city = this.getLocalizedText(donor.city);
      
      return `
        <div class="donor-card">
          <div class="donor-blood">${donor.blood}</div>
          <div class="donor-info">
            <h4>${name}</h4>
            <div class="donor-location">📍 ${city}</div>
            <div class="donor-phone">📞 ${donor.phone}</div>
          </div>
          <div class="donor-status">
            <span class="status status--success">Available</span>
          </div>
        </div>
      `;
    }).join('');
  },

  // Authentication methods
  sendOTP(type) {
    const phoneInput = type === 'login' ? 
      document.getElementById('login-phone') : 
      document.getElementById('register-phone');
    
    if (!phoneInput) return;
    
    const phone = phoneInput.value;
    if (!phone) {
      alert('Please enter a valid mobile number');
      return;
    }

    alert(`OTP sent to ${phone}. Use 123456 for demo.`);
    
    if (type === 'login') {
      const verifyBtn = document.getElementById('verify-login-btn');
      if (verifyBtn) {
        verifyBtn.classList.remove('hidden');
      }
    }
  },

  login() {
    const phone = document.getElementById('login-phone')?.value;
    const otp = document.getElementById('login-otp')?.value;
    
    if (!phone || !otp) {
      alert('Please fill all fields');
      return;
    }
    
    if (otp !== '123456') {
      alert('Invalid OTP. Use 123456 for demo.');
      return;
    }
    
    this.currentUser = {
      name: this.getLocalizedText({en: 'Ramesh Dabgar', hi: 'रमेश डबगर', gu: 'રમેશ ડબગર'}),
      phone: phone,
      city: this.getLocalizedText({en: 'Lunawada', hi: 'लूणावाडा', gu: 'લૂણાવાડા'})
    };
    
    this.hideModal('login-modal');
    this.showMainApp();
  },

  register() {
    const name = document.getElementById('family-head-name')?.value;
    const phone = document.getElementById('register-phone')?.value;
    const city = document.getElementById('city')?.value;
    
    if (!name || !phone || !city) {
      alert('Please fill all fields');
      return;
    }
    
    this.currentUser = { name, phone, city };
    
    this.hideModal('register-modal');
    alert(this.t('register_family') + ' successful! Welcome to Dabgar Samaj Community!');
    this.showMainApp();
  },

  showMainApp() {
    document.getElementById('landing-page').classList.add('hidden');
    document.getElementById('main-app').classList.remove('hidden');
    
    // Set default view to home
    window.location.hash = 'home';
    this.handleHashChange();
  },

  logout() {
    this.currentUser = null;
    this.isAdmin = false;
    document.getElementById('main-app').classList.add('hidden');
    document.getElementById('landing-page').classList.remove('hidden');
    window.location.hash = '';
  },

  // Modal handlers
  hideModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('hidden');
    }
  },

  showModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove('hidden');
    }
    this.setupFormHandlers();
  },

  // Form handlers setup
  setupFormHandlers() {
    setTimeout(() => {
      const loginForm = document.getElementById('login-form');
      if (loginForm && !loginForm.hasListener) {
        loginForm.addEventListener('submit', (e) => {
          e.preventDefault();
          this.login();
        });
        loginForm.hasListener = true;
      }

      const registerForm = document.getElementById('register-form');
      if (registerForm && !registerForm.hasListener) {
        registerForm.addEventListener('submit', (e) => {
          e.preventDefault();
          this.register();
        });
        registerForm.hasListener = true;
      }

      const adminForm = document.getElementById('admin-password-form');
      if (adminForm && !adminForm.hasListener) {
        adminForm.addEventListener('submit', (e) => {
          e.preventDefault();
          this.authenticateAdmin();
        });
        adminForm.hasListener = true;
      }

      const familyForm = document.getElementById('family-register-form');
      if (familyForm && !familyForm.hasListener) {
        familyForm.addEventListener('submit', (e) => {
          e.preventDefault();
          this.registerFamily();
        });
        familyForm.hasListener = true;
      }

      const emergencyForm = document.getElementById('emergency-sos-form');
      if (emergencyForm && !emergencyForm.hasListener) {
        emergencyForm.addEventListener('submit', (e) => {
          e.preventDefault();
          this.sendEmergencyAlert();
        });
        emergencyForm.hasListener = true;
      }

      const eventForm = document.getElementById('create-event-form');
      if (eventForm && !eventForm.hasListener) {
        eventForm.addEventListener('submit', (e) => {
          e.preventDefault();
          this.createEvent();
        });
        eventForm.hasListener = true;
      }
    }, 100);
  },

  // Additional functionality
  authenticateAdmin() {
    const password = document.getElementById('admin-password')?.value;
    if (password === 'admin') {
      this.isAdmin = true;
      this.hideModal('admin-password-modal');
      this.renderAdminView();
    } else {
      alert('Invalid password. Use "admin" for demo.');
    }
  },

  logoutAdmin() {
    this.isAdmin = false;
    window.location.hash = 'home';
  },

  createPost() {
    const postInput = document.getElementById('new-post');
    if (!postInput) return;
    
    const content = postInput.value.trim();
    if (!content) {
      alert('Please write something to share');
      return;
    }
    
    const newPost = {
      id: this.data.posts.length + 1,
      authorId: 1,
      content: {
        en: content,
        hi: content,
        gu: content
      },
      timestamp: new Date(),
      likes: 0,
      liked: false,
      type: 'update'
    };
    
    this.data.posts.unshift(newPost);
    postInput.value = '';
    
    this.renderHomeView();
  },

  toggleLike(postId) {
    const post = this.data.posts.find(p => p.id === postId);
    if (post) {
      post.liked = !post.liked;
      post.likes += post.liked ? 1 : -1;
      this.renderView(this.currentView);
    }
  },

  setupMemberSearch() {
    const searchInput = document.getElementById('member-search');
    const bloodFilter = document.getElementById('blood-filter');
    const cityFilter = document.getElementById('city-filter');
    
    const performSearch = () => {
      // Search functionality would be implemented here
      console.log('Search performed');
    };
    
    if (searchInput) searchInput.addEventListener('input', performSearch);
    if (bloodFilter) bloodFilter.addEventListener('change', performSearch);
    if (cityFilter) cityFilter.addEventListener('change', performSearch);
  },

  viewMemberProfile(memberId) {
    const member = this.data.members.find(m => m.id === memberId);
    if (member) {
      const name = this.getLocalizedText(member.name);
      const city = this.getLocalizedText(member.city);
      const profession = this.getLocalizedText(member.profession);
      alert(`Viewing profile for ${name}\nCity: ${city}\nProfession: ${profession}\nPhone: ${member.phone || 'Not provided'}`);
    }
  },

  registerFamily() {
    alert('Family registration functionality');
  },

  sendEmergencyAlert() {
    alert('Emergency alert sent successfully!');
    this.hideModal('emergency-sos-modal');
  },

  createEvent() {
    alert('Event created successfully!');
    this.hideModal('create-event-modal');
  },

  searchBloodDonors() {
    console.log('Blood donor search performed');
  },

  callEmergency(number) {
    alert(`Calling ${number}...\nIn a real app, this would dial the emergency number.`);
  },

  applyJob(jobId) {
    const job = this.data.jobs.find(j => j.id === jobId);
    if (job) {
      const title = this.getLocalizedText(job.title);
      const company = this.getLocalizedText(job.company);
      alert(`Application submitted for ${title} position at ${company}!`);
    }
  },

  expressInterest(profileId) {
    const profile = this.data.matrimony.find(p => p.id === profileId);
    const member = this.data.members.find(m => m.id === profile?.memberId);
    if (member) {
      const name = this.getLocalizedText(member.name);
      alert(`Interest expressed in ${name}'s profile. The family will be notified.`);
    }
  },

  // Utility methods
  getInitials(name) {
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  },

  formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString(this.currentLanguage === 'hi' ? 'hi-IN' : 
                                   this.currentLanguage === 'gu' ? 'gu-IN' : 'en-IN', { 
      day: 'numeric', 
      month: 'short', 
      year: 'numeric' 
    });
  },

  calculateAge(dob) {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    
    return age;
  },

  getTimeAgo(timestamp) {
    const now = new Date();
    const diff = now - new Date(timestamp);
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    
    if (days > 0) return `${days}d ago`;
    if (hours > 0) return `${hours}h ago`;
    if (minutes > 0) return `${minutes}m ago`;
    return 'Just now';
  }
};

// Global function bindings for HTML onclick handlers
window.showLogin = () => {
  SamajApp.showModal('login-modal');
};

window.showRegister = () => {
  SamajApp.showModal('register-modal');
};

window.hideModal = (modalId) => {
  SamajApp.hideModal(modalId);
};

window.sendOTP = (type) => {
  SamajApp.sendOTP(type);
};

window.logout = () => {
  SamajApp.logout();
};

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  SamajApp.init();
  console.log('Dabgar Samaj Community App with Multilingual Support Loaded Successfully!');
});