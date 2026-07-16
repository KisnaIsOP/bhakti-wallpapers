export interface Wallpaper {
  id: string;
  title: string;
  url: string;
  aspectRatio: '9:16' | '16:9';
  category: string;
  tags: string[];
}

export const wallpapersData: Wallpaper[] = [
  // Original Wallpapers
  {
    id: 'shiva_kailash_desktop',
    title: 'Mahadev Meditating on Kailash',
    url: '/wallpapers/shiva_kailash_desktop.png',
    aspectRatio: '16:9',
    category: 'Shiva',
    tags: ['Shiva', 'Kailash', 'Cosmic', 'Meditation']
  },
  {
    id: 'krishna_flute_desktop',
    title: 'Divine Krishna with Flute',
    url: '/wallpapers/krishna_flute_desktop.png',
    aspectRatio: '16:9',
    category: 'Krishna',
    tags: ['Krishna', 'Flute', 'Vrindavan', 'Divine']
  },
  {
    id: 'ganesha_cosmic_desktop',
    title: 'Cosmic Lord Ganesha',
    url: '/wallpapers/ganesha_cosmic_desktop.png',
    aspectRatio: '16:9',
    category: 'Ganesha',
    tags: ['Ganesha', 'Cosmic', 'Nebula', 'Modern']
  },
  {
    id: 'durga_golden_desktop',
    title: 'Goddess Durga Divine Strength',
    url: '/wallpapers/durga_golden_desktop.png',
    aspectRatio: '16:9',
    category: 'Durga',
    tags: ['Durga', 'Golden', 'Temple', 'Power']
  },
  {
    id: 'hanuman_dronagiri_desktop',
    title: 'Hanuman Carrying Dronagiri',
    url: '/wallpapers/hanuman_dronagiri_desktop.png',
    aspectRatio: '16:9',
    category: 'Hanuman',
    tags: ['Hanuman', 'Dronagiri', 'Cosmic', 'Power']
  },
  {
    id: 'ram_sunset_desktop',
    title: 'Lord Ram at Sunset Temple',
    url: '/wallpapers/ram_sunset_desktop.png',
    aspectRatio: '16:9',
    category: 'Ram',
    tags: ['Ram', 'Sunset', 'Temple', 'Silhouette']
  },
  {
    id: 'saraswati_river_desktop',
    title: 'Goddess Saraswati by River',
    url: '/wallpapers/saraswati_river_desktop.png',
    aspectRatio: '16:9',
    category: 'Saraswati',
    tags: ['Saraswati', 'Veena', 'River', 'Peaceful']
  },
  {
    id: 'radha_krishna_cosmic_desktop',
    title: 'Radha Krishna Ethereal Love',
    url: '/wallpapers/radha_krishna_cosmic_desktop.png',
    aspectRatio: '16:9',
    category: 'Krishna',
    tags: ['Radha', 'Krishna', 'Cosmic', 'Love']
  },
  {
    id: 'kedarnath_aurora_desktop',
    title: 'Kedarnath under Aurora Lights',
    url: '/wallpapers/kedarnath_aurora_desktop.png',
    aspectRatio: '16:9',
    category: 'Temple',
    tags: ['Kedarnath', 'Temple', 'Himalayas', 'Aurora']
  },
  {
    id: 'om_nebula_desktop',
    title: 'Cosmic Om Symbol in Space',
    url: '/wallpapers/om_nebula_desktop.png',
    aspectRatio: '16:9',
    category: 'Cosmic',
    tags: ['Om', 'Cosmic', 'Nebula', 'Symbol']
  },
  {
    id: 'shiva_trishul_mobile',
    title: 'Sacred Trishul on Himalayan Peak',
    url: '/wallpapers/shiva_trishul_mobile.png',
    aspectRatio: '9:16',
    category: 'Shiva',
    tags: ['Shiva', 'Trishul', 'Kailash', 'Sunset']
  },
  {
    id: 'baby_krishna_mobile',
    title: 'Makhanchur Baby Krishna',
    url: '/wallpapers/baby_krishna_mobile.png',
    aspectRatio: '9:16',
    category: 'Krishna',
    tags: ['Krishna', 'Baby', 'Cute', 'Vrindavan']
  },
  {
    id: 'ganesha_minimalist_mobile',
    title: 'Golden Neon Minimalist Ganesha',
    url: '/wallpapers/ganesha_minimalist_mobile.png',
    aspectRatio: '9:16',
    category: 'Ganesha',
    tags: ['Ganesha', 'Minimalist', 'Neon', 'Line Art']
  },
  {
    id: 'durga_eyes_mobile',
    title: 'Goddess Durga Divine Eyes',
    url: '/wallpapers/durga_eyes_mobile.png',
    aspectRatio: '9:16',
    category: 'Durga',
    tags: ['Durga', 'Eyes', 'Trinetra', 'Energy']
  },
  {
    id: 'hanuman_meditate_mobile',
    title: 'Hanuman Meditating on Ram',
    url: '/wallpapers/hanuman_meditate_mobile.png',
    aspectRatio: '9:16',
    category: 'Hanuman',
    tags: ['Hanuman', 'Meditation', 'Ram', 'Devotion']
  },
  {
    id: 'ram_royal_mobile',
    title: 'Maryada Purushottam Rama',
    url: '/wallpapers/ram_royal_mobile.png',
    aspectRatio: '9:16',
    category: 'Ram',
    tags: ['Ram', 'Royal', 'Gold', 'Majestic']
  },
  {
    id: 'shiva_cosmic_mobile',
    title: 'Cosmic Shiva Deep Meditation',
    url: '/wallpapers/shiva_cosmic_mobile.png',
    aspectRatio: '9:16',
    category: 'Shiva',
    tags: ['Shiva', 'Cosmic', 'Meditation', 'Galaxy']
  },
  {
    id: 'flute_feather_mobile',
    title: 'Divine Flute & Peacock Feather',
    url: '/wallpapers/flute_feather_mobile.png',
    aspectRatio: '9:16',
    category: 'Krishna',
    tags: ['Krishna', 'Flute', 'Peacock', 'Rustic']
  },
  {
    id: 'golden_temple_mobile',
    title: 'Golden Temple Night View',
    url: '/wallpapers/golden_temple_mobile.png',
    aspectRatio: '9:16',
    category: 'Temple',
    tags: ['Golden Temple', 'Amritsar', 'Night', 'Reflection']
  },
  {
    id: 'lotus_aura_mobile',
    title: 'Glowing Lotus Divine Aura',
    url: '/wallpapers/lotus_aura_mobile.png',
    aspectRatio: '9:16',
    category: 'Cosmic',
    tags: ['Lotus', 'Aura', 'Meditation', 'Energy']
  },

  // New Wallpapers added by user Kisna Raghuvanshi
  {
    id: 'Ardhanarishvara_Shiva_Parvati_di._202607162102',
    title: 'Ardhanarishvara Shiva Parvati Cosmic Union',
    url: '/wallpapers/Ardhanarishvara_Shiva_Parvati_di._202607162102.jpeg',
    aspectRatio: '16:9',
    category: 'Shiva',
    tags: ['Shiva', 'Parvati', 'Ardhanarishvara', 'Cosmic', 'Union']
  },
  {
    id: 'Ayodhya_Ram_Mandir_temple_sunrise_202607162102',
    title: 'Ayodhya Ram Mandir Temple Sunrise',
    url: '/wallpapers/Ayodhya_Ram_Mandir_temple_sunrise_202607162102.jpeg',
    aspectRatio: '16:9',
    category: 'Temple',
    tags: ['Ayodhya', 'Ram Mandir', 'Temple', 'Sunrise']
  },
  {
    id: 'Baby_Krishna_holding_butter_202607162102',
    title: 'Cute Baby Krishna with Butter',
    url: '/wallpapers/Baby_Krishna_holding_butter_202607162102.jpeg',
    aspectRatio: '9:16',
    category: 'Krishna',
    tags: ['Krishna', 'Baby', 'Cute', 'Vrindavan']
  },
  {
    id: 'Buddha_meditating_under_Bodhi_tree_202607162104',
    title: 'Meditating Buddha under Bodhi Tree',
    url: '/wallpapers/Buddha_meditating_under_Bodhi_tree_202607162104.jpeg',
    aspectRatio: '16:9',
    category: 'Cosmic',
    tags: ['Buddha', 'Meditation', 'Bodhi Tree', 'Zen']
  },
  {
    id: 'Buddha_silhouette_against_settin._202607162102',
    title: 'Buddha Silhouette at Sunset',
    url: '/wallpapers/Buddha_silhouette_against_settin._202607162102.jpeg',
    aspectRatio: '9:16',
    category: 'Cosmic',
    tags: ['Buddha', 'Sunset', 'Minimalist', 'Zen']
  },
  {
    id: 'Deity_of_Lord_Venkateswara_covered_202607162103',
    title: 'Lord Venkateswara Golden Deity',
    url: '/wallpapers/Deity_of_Lord_Venkateswara_covered_202607162103.jpeg',
    aspectRatio: '16:9',
    category: 'Temple',
    tags: ['Venkateswara', 'Balaji', 'Temple', 'Gold']
  },
  {
    id: 'Flute_and_peacock_feather_wood_202607162103',
    title: 'Krishna Flute and Peacock Feather',
    url: '/wallpapers/Flute_and_peacock_feather_wood_202607162103.jpeg',
    aspectRatio: '16:9',
    category: 'Krishna',
    tags: ['Krishna', 'Flute', 'Peacock', 'Rustic']
  },
  {
    id: 'Ganga_Aarti_at_night_202607162103',
    title: 'Varanasi Ganga Aarti at Night',
    url: '/wallpapers/Ganga_Aarti_at_night_202607162103.jpeg',
    aspectRatio: '16:9',
    category: 'Temple',
    tags: ['Varanasi', 'Ganga', 'Aarti', 'Temple']
  },
  {
    id: 'Gayatri_Mantra_golden_Sanskrit_c._202607162101',
    title: 'Gayatri Mantra Gold Calligraphy',
    url: '/wallpapers/Gayatri_Mantra_golden_Sanskrit_c._202607162101.jpeg',
    aspectRatio: '9:16',
    category: 'Cosmic',
    tags: ['Gayatri Mantra', 'Sanskrit', 'Mantra', 'Gold']
  },
  {
    id: 'Goddess_Durga\'s_eyes_glowing_202607162102',
    title: 'Goddess Durga Glowing Eyes',
    url: '/wallpapers/Goddess_Durga\'s_eyes_glowing_202607162102.jpeg',
    aspectRatio: '9:16',
    category: 'Durga',
    tags: ['Durga', 'Eyes', 'Trinetra', 'Energy']
  },
  {
    id: 'Goddess_Durga_sitting_on_lion_202607162103',
    title: 'Goddess Durga on Lion',
    url: '/wallpapers/Goddess_Durga_sitting_on_lion_202607162103.jpeg',
    aspectRatio: '16:9',
    category: 'Durga',
    tags: ['Durga', 'Lion', 'Goddess', 'Power']
  },
  {
    id: 'Goddess_Kali_face_close-up_202607162102',
    title: 'Goddess Kali Face Close-up',
    url: '/wallpapers/Goddess_Kali_face_close-up_202607162102.jpeg',
    aspectRatio: '9:16',
    category: 'Durga',
    tags: ['Kali', 'Durga', 'Fierce', 'Power']
  },
  {
    id: 'Goddess_Lakshmi_emerging_from_lotus_202607162103',
    title: 'Goddess Lakshmi Lotus Ocean',
    url: '/wallpapers/Goddess_Lakshmi_emerging_from_lotus_202607162103.jpeg',
    aspectRatio: '16:9',
    category: 'Cosmic',
    tags: ['Lakshmi', 'Lotus', 'Ocean', 'Wealth']
  },
  {
    id: 'Goddess_Lakshmi_showering_gold_c._202607162101',
    title: 'Lakshmi Showering Gold Coins',
    url: '/wallpapers/Goddess_Lakshmi_showering_gold_c._202607162101.jpeg',
    aspectRatio: '9:16',
    category: 'Cosmic',
    tags: ['Lakshmi', 'Gold', 'Shower', 'Abundance']
  },
  {
    id: 'Goddess_Saraswati_playing_veena_._202607162103',
    title: 'Goddess Saraswati Playing Veena',
    url: '/wallpapers/Goddess_Saraswati_playing_veena_._202607162103.jpeg',
    aspectRatio: '16:9',
    category: 'Saraswati',
    tags: ['Saraswati', 'Veena', 'River', 'Wisdom']
  },
  {
    id: 'Goddess_Saraswati_portrait_holdi._202607162102',
    title: 'Goddess Saraswati Divine Portrait',
    url: '/wallpapers/Goddess_Saraswati_portrait_holdi._202607162102.jpeg',
    aspectRatio: '9:16',
    category: 'Saraswati',
    tags: ['Saraswati', 'Portrait', 'Veena', 'Wisdom']
  },
  {
    id: 'Golden_flute_with_peacock_feather_202607162102',
    title: 'Golden Flute & Peacock Feather',
    url: '/wallpapers/Golden_flute_with_peacock_feather_202607162102.jpeg',
    aspectRatio: '9:16',
    category: 'Krishna',
    tags: ['Krishna', 'Flute', 'Peacock', 'Aesthetic']
  },
  {
    id: 'Golden_Temple_dome_reflection_water_202607162101',
    title: 'Golden Temple Dome Reflection',
    url: '/wallpapers/Golden_Temple_dome_reflection_water_202607162101.jpeg',
    aspectRatio: '9:16',
    category: 'Temple',
    tags: ['Golden Temple', 'Amritsar', 'Reflection', 'Dome']
  },
  {
    id: 'Golden_Temple_illuminated_night_202607162103',
    title: 'Golden Temple Illuminated at Night',
    url: '/wallpapers/Golden_Temple_illuminated_night_202607162103.jpeg',
    aspectRatio: '16:9',
    category: 'Temple',
    tags: ['Golden Temple', 'Amritsar', 'Night', 'Lights']
  },
  {
    id: 'Hands_placing_diyas_in_Ganges_202607162102',
    title: 'Placing Floating Diyas in Ganges',
    url: '/wallpapers/Hands_placing_diyas_in_Ganges_202607162102.jpeg',
    aspectRatio: '9:16',
    category: 'Temple',
    tags: ['Ganges', 'Diya', 'Aarti', 'Varanasi']
  },
  {
    id: 'Kedarnath_temple_in_Himalayan_peaks_202607162103',
    title: 'Kedarnath Temple Himalayan Peaks',
    url: '/wallpapers/Kedarnath_temple_in_Himalayan_peaks_202607162103.jpeg',
    aspectRatio: '16:9',
    category: 'Temple',
    tags: ['Kedarnath', 'Temple', 'Himalayas', 'Snow']
  },
  {
    id: 'Kedarnath_temple_Milky_Way_night_202607162102',
    title: 'Kedarnath Temple & Milky Way',
    url: '/wallpapers/Kedarnath_temple_Milky_Way_night_202607162102.jpeg',
    aspectRatio: '9:16',
    category: 'Temple',
    tags: ['Kedarnath', 'Temple', 'Milky Way', 'Night']
  },
  {
    id: 'Krishna_and_Radha_under_tree_202607162104',
    title: 'Radha Krishna Under Blossom Tree',
    url: '/wallpapers/Krishna_and_Radha_under_tree_202607162104.jpeg',
    aspectRatio: '16:9',
    category: 'Krishna',
    tags: ['Radha', 'Krishna', 'Love', 'Blossom']
  },
  {
    id: 'Lord_Ganesha_vector_art_202607162103',
    title: 'Minimalist Lord Ganesha Vector',
    url: '/wallpapers/Lord_Ganesha_vector_art_202607162103.jpeg',
    aspectRatio: '9:16',
    category: 'Ganesha',
    tags: ['Ganesha', 'Vector', 'Minimalist', 'Line Art']
  },
  {
    id: 'Lord_Hanuman_flying_upwards_hold._202607162102',
    title: 'Lord Hanuman Flying Upwards',
    url: '/wallpapers/Lord_Hanuman_flying_upwards_hold._202607162102.jpeg',
    aspectRatio: '9:16',
    category: 'Hanuman',
    tags: ['Hanuman', 'Flying', 'Gada', 'Power']
  },
  {
    id: 'Lord_Hanuman_meditating_with_Ram._202607162102',
    title: 'Hanuman Meditating on Lord Ram',
    url: '/wallpapers/Lord_Hanuman_meditating_with_Ram._202607162102.jpeg',
    aspectRatio: '9:16',
    category: 'Hanuman',
    tags: ['Hanuman', 'Meditation', 'Ram', 'Devotion']
  },
  {
    id: 'Lord_Rama_holding_bow_202607162102',
    title: 'Lord Rama Holding Bow Profile',
    url: '/wallpapers/Lord_Rama_holding_bow_202607162102.jpeg',
    aspectRatio: '9:16',
    category: 'Ram',
    tags: ['Ram', 'Bow', 'Royal', 'Portrait']
  },
  {
    id: 'Lord_Rama_holding_bow_temple_202607162104',
    title: 'Lord Rama at Sunset Temple',
    url: '/wallpapers/Lord_Rama_holding_bow_temple_202607162104.jpeg',
    aspectRatio: '16:9',
    category: 'Ram',
    tags: ['Ram', 'Sunset', 'Temple', 'Silhouette']
  },
  {
    id: 'Lord_Shiva_meditation_portrait_202607162103',
    title: 'Lord Shiva Meditation Portrait',
    url: '/wallpapers/Lord_Shiva_meditation_portrait_202607162103.jpeg',
    aspectRatio: '9:16',
    category: 'Shiva',
    tags: ['Shiva', 'Meditation', 'Portrait', 'Aura']
  },
  {
    id: 'Lord_Surya_Dev_riding_chariot_202607162103',
    title: 'Lord Surya Dev Riding Chariot',
    url: '/wallpapers/Lord_Surya_Dev_riding_chariot_202607162103.jpeg',
    aspectRatio: '16:9',
    category: 'Cosmic',
    tags: ['Surya', 'Sun', 'Chariot', 'Power']
  },
  {
    id: 'Lord_Vishnu_holding_Sudarshana_C._202607162102',
    title: 'Lord Vishnu Sudarshana Chakra',
    url: '/wallpapers/Lord_Vishnu_holding_Sudarshana_C._202607162102.jpeg',
    aspectRatio: '9:16',
    category: 'Cosmic',
    tags: ['Vishnu', 'Sudarshana', 'Chakra', 'Cosmic']
  },
  {
    id: 'Lord_Vishnu_reclining_on_Sheshnaag_202607162104',
    title: 'Lord Vishnu on Sheshnaag',
    url: '/wallpapers/Lord_Vishnu_reclining_on_Sheshnaag_202607162104.jpeg',
    aspectRatio: '16:9',
    category: 'Cosmic',
    tags: ['Vishnu', 'Sheshnaag', 'Cosmic Ocean', 'Peace']
  },
  {
    id: 'Lotus_flower_representing_seven_._202607162104',
    title: 'Seven Chakras Lotus Flower',
    url: '/wallpapers/Lotus_flower_representing_seven_._202607162104.jpeg',
    aspectRatio: '16:9',
    category: 'Cosmic',
    tags: ['Lotus', 'Chakras', 'Kundalini', 'Meditation']
  },
  {
    id: 'Mahamrityunjaya_Mantra_Sanskrit_._202607162103',
    title: 'Mahamrityunjaya Mantra Sanskrit',
    url: '/wallpapers/Mahamrityunjaya_Mantra_Sanskrit_._202607162103.jpeg',
    aspectRatio: '16:9',
    category: 'Shiva',
    tags: ['Shiva', 'Mantra', 'Sanskrit', 'Calligraphy']
  },
  {
    id: 'Om_symbol_in_cosmic_nebula_202607162104',
    title: 'Om Symbol in Cosmic Nebula',
    url: '/wallpapers/Om_symbol_in_cosmic_nebula_202607162104.jpeg',
    aspectRatio: '16:9',
    category: 'Cosmic',
    tags: ['Om', 'Cosmic', 'Nebula', 'Space']
  },
  {
    id: 'Om_symbol_in_neon_light_202607162101',
    title: 'Om Symbol Neon Glow',
    url: '/wallpapers/Om_symbol_in_neon_light_202607162101.jpeg',
    aspectRatio: '9:16',
    category: 'Cosmic',
    tags: ['Om', 'Neon', 'Glow', 'Minimalist']
  },
  {
    id: 'Panchmukhi_Hanuman_with_cosmic_w._202607162104',
    title: 'Panchmukhi Hanuman Power',
    url: '/wallpapers/Panchmukhi_Hanuman_with_cosmic_w._202607162104.jpeg',
    aspectRatio: '16:9',
    category: 'Hanuman',
    tags: ['Hanuman', 'Panchmukhi', 'Cosmic', 'Shield']
  },
  {
    id: 'Shiva\'s_Trishul_Damru_fire_202607162101',
    title: 'Shiva Trishul and Sacred Fire',
    url: '/wallpapers/Shiva\'s_Trishul_Damru_fire_202607162101.jpeg',
    aspectRatio: '9:16',
    category: 'Shiva',
    tags: ['Shiva', 'Trishul', 'Damru', 'Fire']
  },
  {
    id: 'Shiva\'s_Trishul_Damru_Himalayan_._202607162101',
    title: 'Shiva Trishul Himalayan Dawn',
    url: '/wallpapers/Shiva\'s_Trishul_Damru_Himalayan_._202607162101.jpeg',
    aspectRatio: '16:9',
    category: 'Shiva',
    tags: ['Shiva', 'Trishul', 'Damru', 'Himalayas']
  },
  {
    id: 'Shiva_Nataraja_cosmic_dancer_pose_202607162103',
    title: 'Shiva Nataraja Dance of Fire',
    url: '/wallpapers/Shiva_Nataraja_cosmic_dancer_pose_202607162103.jpeg',
    aspectRatio: '16:9',
    category: 'Shiva',
    tags: ['Shiva', 'Nataraja', 'Dance', 'Fire']
  },
  {
    id: 'Shrinathji_Krishna_deity_Pichwai._202607162101',
    title: 'Shrinathji Krishna Pichwai Art',
    url: '/wallpapers/Shrinathji_Krishna_deity_Pichwai._202607162101.jpeg',
    aspectRatio: '9:16',
    category: 'Krishna',
    tags: ['Shrinathji', 'Krishna', 'Pichwai', 'Art']
  },
  {
    id: 'Silhouette_meditating_person_cha._202607162101',
    title: 'Kundalini Chakra Silhouette',
    url: '/wallpapers/Silhouette_meditating_person_cha._202607162101.jpeg',
    aspectRatio: '9:16',
    category: 'Cosmic',
    tags: ['Meditation', 'Chakras', 'Silhouette', 'Kundalini']
  },
  {
    id: 'Sun_God_face_profile_crown_202607162102',
    title: 'Surya Dev Face Profile Crown',
    url: '/wallpapers/Sun_God_face_profile_crown_202607162102.jpeg',
    aspectRatio: '9:16',
    category: 'Cosmic',
    tags: ['Surya', 'Sun', 'Crown', 'Portrait']
  },
  {
    id: 'Tirupati_Balaji_neon_outline_202607162102',
    title: 'Tirupati Balaji Neon Outline',
    url: '/wallpapers/Tirupati_Balaji_neon_outline_202607162102.jpeg',
    aspectRatio: '9:16',
    category: 'Temple',
    tags: ['Balaji', 'Tirupati', 'Neon', 'Outline']
  }
];
