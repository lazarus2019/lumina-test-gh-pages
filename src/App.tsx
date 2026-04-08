/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { 
  Search, 
  LayoutGrid, 
  List, 
  Grid3X3, 
  Image as ImageIcon,
  FolderOpen,
  Waves,
  Trees,
  Cloud,
  Info,
  Palette,
  FileText
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Photo {
  id: string;
  url: string;
  name: string;
  date: string;
  dimensions: string;
  size: string;
  colors: string[];
  alt: string;
}

const PHOTOS: Photo[] = [
  {
    id: '1',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHOSSJ-QJEJ-A3l6_CFCnhfuVkuXSbOnVsrqai-jpkiMmpeNsrc22iDh-cKlVtNHh_qWhV7IeGRzTfrSWvuEdom0WeZFzFZdVaRit2y2MKIZI1RFmzX4LnMZfmbhWZYKN53I4DbnWbIM_Xmhkk2WOz2TViPJFGiRHMUKyGHo67IwcZtd1Wka0H4smvST-JErLfbUH08T_yz--roRMJbZ0Q923r1lJhdPh4Ncz8t7PLPII5-rW-UUV4N1zSmAIliTAhdeUUrCqENTM',
    name: 'horse_profile.jpg',
    date: 'October 12, 2023',
    dimensions: '2048 x 2048',
    size: '1.2 MB',
    colors: ['#8B4513', '#D2B48C', '#F5F5DC'],
    alt: 'Icon of a horse'
  },
  {
    id: '2',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDbdFoQm01128buyL1InSN7PefQqY3l8I3pI8pNvc9Vh1cW-9fjuVw0BoIKuI25VWMb0rsVnqIUIK3IHMGzToOgPfdTEE4Bt7w33JrryD7HglTu9vGfgWC0cWkiMPNhvWOYqI0SsLT0K9EGRvTEpLcoeUS_4MRsMGmcY_aWrxr8flu4m9JfgHHbUr-mV6Ouhu2XIcl8PfO-qVz_w6Du706rgd9u5O1tnYPUi-oJxSQJGEBzssiVEFRcRs63UiYBzVdaZEtEFxrRJY',
    name: 'mountain_tent.jpg',
    date: 'October 15, 2023',
    dimensions: '3000 x 2000',
    size: '2.1 MB',
    colors: ['#2F4F4F', '#708090', '#FFFFFF'],
    alt: 'Icon of a tent'
  },
  {
    id: '3',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAO8PcCZSbJSVmZYdroqqTTtsJsVBiXg0DZT3s4YZKpCbcopXalfjpcp2G8CCm3NmptHnsZJwBddwZ8qQ63EQaWWEUjrq-Pe-LDlMTuXsNfYUmIERA9DUyv65EBiNmtQ0lqK17-bfAMGLsBnkxV8OzXJjWDf70rfMOSxuWgFTXHMHrpCMzRCxjGq9PToP-2kxpUvjrGY8FjRHXFxBpGrWxkWpmbwrxv6uEB8NmjsKDXMZsAMHVVdm4h5PIhOU7X7fdTT5UWmlvBQuU',
    name: 'mountain_peak.jpg',
    date: 'October 18, 2023',
    dimensions: '4000 x 3000',
    size: '3.4 MB',
    colors: ['#4682B4', '#B0C4DE', '#F0F8FF'],
    alt: 'Icon of a mountain'
  },
  {
    id: '4',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKZXtDN6cWrlQGRIqX7z8DdaJ7i68CyZFKkdqVqs4-ESqFa5hsQ8G4nLJH7-rjaxG0UJWs40XvsuwFQcniD71C4ZpZTEMSHuy1VMFmgqQaohqNJ6G6Uyn-K9hakRpSYjOjzSf7v5vwfBK4r-OQX3V7wOEbYhGHEb2eAQ1x1QZTy76yfK-rVxZZWjKRJ0QWrosnFiUp-7TrXFqJcvieERRwUPVUkOPP-0_-bDx-wSjdBf-WRB65dYggmdf3uhrKynw4Gf0USd6Sw6g',
    name: 'squirrel_image_01.jpg',
    date: 'October 26, 2023',
    dimensions: '3024 x 4032',
    size: '2.5 MB',
    colors: ['#A0522D', '#696969', '#2E8B57', '#D3D3D3', '#FF8C00'],
    alt: 'Icon of a squirrel'
  },
  {
    id: '5',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDlVVEnXwuvf4WdqCD7AwnBfQ9iPYx54teTtr86jKP5lC1ZDsrAa5WQx1VhXY0od06FjOpLrdBqTQCghJsl9wPf8Sd2t8R_q7ksv9Fw2CoETGWcVrKXcs1I8Q2nSVrFGJoAZmmBxY2P-mkC2TvXg0mdrCzgT2B75mIkSP8BPgOZmUjPkMbQxY3x_k5Px5CqPMS2GrU8_VAA0b7lKEpBXBeTzIkx74Mdr989exwkRVKuYGoPc6uJdrvJ0CxT42r05cAqQIinVyFAbb0',
    name: 'ocean_waves.jpg',
    date: 'October 28, 2023',
    dimensions: '1920 x 1080',
    size: '1.8 MB',
    colors: ['#008080', '#00CED1', '#E0FFFF'],
    alt: 'Icon of wavy lines'
  },
  {
    id: '6',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBDqeRNw1gZ7_p_w5vgim0tsUK37pYzgVA2mSEfU4WOIEmYYE6GWQ8x_EaeSQxztMzmMx2g53Uh5HKP-YFbFnBInpz_zZft09Jz3btU9AYyQ3UnJZjpwPMA1S9EUCLRMjf7Wj0Qj8ce0J0mfCeshfRoHT9rAHEa9hLblK0XXxXYqJIlnqsV6BTuXfCZmxsdSOIU-0JkZBSG4nyBMch9ILJUdT0V0NR89s2WfhK1yE2pLPMC7T-fjCuQPOM4QmC0BTTsDjBTs77VaoI',
    name: 'bird_sketch.jpg',
    date: 'November 02, 2023',
    dimensions: '1024 x 1024',
    size: '0.8 MB',
    colors: ['#DAA520', '#8B4513', '#FFF8DC'],
    alt: 'Icon of a bird'
  },
  {
    id: '7',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfaWa9U-A_Z14KmJew4dheiNv1ZhU8ma7XQdA3bCUxMOtrZsCVjKvIS6pwVYK_74esVWWUJc4Leki7kPjvDk_B9heFKRbfr3vQyMcUjsscx5t6XOLALY6FXjC_xLadmun4JJ8kH7HCSz7UboNzLy9r6u-aUECxTHVdNJubjDGJSngli4T4wrf2vzpGHXBaLxl-01odSciDbaXuDOu65jmG9BN1KPA4HbskTZSkekhYn7LkuwkE0kprKkMfxu8MSsO5mDzCAELTzSA',
    name: 'minimal_tree.jpg',
    date: 'November 05, 2023',
    dimensions: '1500 x 1500',
    size: '1.1 MB',
    colors: ['#228B22', '#F0FFF0', '#006400'],
    alt: 'Icon of a tree'
  },
  {
    id: '8',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUhy5QRZJCLieVxrfnA6oKqj9XEeEBRyjM-wtHTQnlAzrDZH3i1EKRF_nDLOBOkJ8IuvSQJE5l2TzmzpjqLHYnDKtUwJ0HqsEP4uMlStSouOgNM9VyYD_hQe-jV9UnhyjfjCeqzNqTLpvN0vEyZ9U5RFKXMvFZZ4u-KyUh6GETabVgkZdJJxz7h007h7YzxWcJuWk0MSZTl7UfbuY6wtpnMDntds5ZnJKkUAuCZtbrhZD13QmbE6Ler7ZANaCIP9beaFu20-O3T8E',
    name: 'swirl_pattern.jpg',
    date: 'November 10, 2023',
    dimensions: '2000 x 2000',
    size: '1.5 MB',
    colors: ['#008B8B', '#E0F2F1', '#004D40'],
    alt: 'Icon of swirls'
  },
  {
    id: '9',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpVRE-hWobfMe8S-fE2CIOoMx8Cq8ZEEcuPeZd1qRv3b0jDuQgc3P69HbhmesaZPMSix_Odk7Ql9o0HpBF6Ur-yUWZSOi0u_qa20dGRvx7JMjtOj3JYpjmgzUVWV7d5Lem5is8sriloLcQnhj1IEX6Iq2Mm5rOFLPIyLJc5vTS-K1fX5KmcVxy1ymP1PjlxAmXLMYgm7C6ft6gqAuTglcDwK5V8RELxqraX8QP0gPkPlLTicvMgdkaSiX4PN9lRCkwW9d5v-zrVwo',
    name: 'abstract_waves.jpg',
    date: 'November 12, 2023',
    dimensions: '2500 x 2500',
    size: '2.3 MB',
    colors: ['#4682B4', '#F0F8FF', '#191970'],
    alt: 'Icon of wavy lines'
  },
  {
    id: '10',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA105MPOvwoVdgbCHmUi3O6vBZCPeYGE_dG-_4Votp2Zy-Hr7sDq3j-3Zn7P6QBZrw8cXONGsT8jNtc-SPieEJdc0BIXBMx4OnQOVmVfnFS8pjI-miJ9Yn_8ZIRHdhLPxzDHFcYnlG7jMfBS6-OrQBIrkr752k1UW7QS5D3imzIN3DNuGROAk0E25ScsYfdJZ4I3MyeJPt3OXkyqKsad4z-l8EDfZCYahs15v2OmnDiP6XWTcEeJ02-edKx8XANFdi-ymKgqgYWHbc',
    name: 'beach_sunset.jpg',
    date: 'November 15, 2023',
    dimensions: '3000 x 1500',
    size: '2.8 MB',
    colors: ['#FF7F50', '#87CEEB', '#FFFACD'],
    alt: 'Icon of waves'
  },
  {
    id: '11',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8GAlu-EHSpvIii3D1iICHKbFMKn9RHLzC4RqHooFjXHi9G3vKGmOrbBTmJSO1IDbP3tlKHsXaXXIuNzAnOH4hE3PJ-0T7TD1XsdkZ4TSPSw-a6jOhj_P6BowMAZwXUaOsRqOD5Sw7cOp_fj-IXBJ2vCR_a1A_5YmFKc0PvFwQDfXI3Jz6lwI60uvMqm0Ldt8XHcaQTFbTZgtUrqEuYRodPZ9zgNBwah6X92qlAVg_9x-HDCZ3h7i3hQWqedybmfg0kvYJegt6eCE',
    name: 'apple_outline.jpg',
    date: 'November 20, 2023',
    dimensions: '1000 x 1000',
    size: '0.5 MB',
    colors: ['#000000', '#FFFFFF'],
    alt: 'Icon of an apple'
  },
  {
    id: '12',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_Z0ArG3yAkdTF0Sj59KAFYdSpQBWVlxWrRhJYr6t_L79hGyQJxzydyEyURISjT0uq2U8TAKxU_OsNB6TwTRm8TSMxw2JdTQRaDVd8mtUhKrZUW2DCEpYEGH4nvhl-Cg0p5staZioLNDcombjvQRayLm0sS9DTze9bDShGBjZjU3xtEcbdq79npHMn6CUJc-bxhZfZa4l3q9s1zRZper9N0Q5JeMg0-5vCBONu9KJAejbZ9zkV2eHmBsNq2jNhBc3LkHy6lohygu0',
    name: 'curved_lines.jpg',
    date: 'November 22, 2023',
    dimensions: '1800 x 1800',
    size: '1.2 MB',
    colors: ['#1A1A1A', '#333333'],
    alt: 'Icon of curves'
  },
  {
    id: '13',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAK2Jgsv4vbl4GAF7wLlmDbpbX_vrqFIERWWPyd__40O0lY0H0floubNfCX-9n5XUtJ2cD5dFe84Vk6w6qWOw2iZyJWRQpPu2fx-FnKn9yCi6_rJe-bpq9BWEKwnUSV2SwAOP6AzjDcuqlh4wE5eHgaa7fxpuV5V-wOT55Dp_HY1AoCL4j7RnOEgkYhhU3DZsnonB95rT-KvVcrCBmjhGQD8h-l4cG4w6tZpiWCZkdF9wzAIf4w0M_zisjVxA1R0gkPl_uY8bIfwqM',
    name: 'leaf_detail.jpg',
    date: 'November 25, 2023',
    dimensions: '1200 x 1200',
    size: '0.9 MB',
    colors: ['#006400', '#2E8B57', '#F5FFFA'],
    alt: 'Icon of a leaf'
  },
  {
    id: '14',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCrGRgHdYbYhKy0MI5lj2EJ37jciGmYKBQO3qQ9C-I4bs59g7L50iBMgmQWM-9hH47E_3dv7IqZDZM1040dJmMQf2tusG3g9ZobsodPoSqkHEKaLADPbhzYHmf6KRyynQSKjITGMkE9AceNs5bVkzzQ39O5scIG9uQ8-5crbyCv1PGJsGjSNOY2fx3te3_L8kj-zVv-7Yq6180Oa8k1pJB-XI1BQBEiqSKxLHQyUzJS3_k2SbRCR9MPnizdfZlYQO8-0UvI_16Hoa8',
    name: 'cat_portrait.jpg',
    date: 'November 28, 2023',
    dimensions: '2000 x 2000',
    size: '1.6 MB',
    colors: ['#696969', '#A9A9A9', '#000000'],
    alt: 'Icon of a cat'
  },
  {
    id: '15',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBODRDUZa4l1nDDw6J-QC6aTzq-0PbhR5HdTyRqgNdGoXbne5Guiux9kt3AP5bUbW4V5e6iFyKciiGdS2ZRd8r9sNXDE40EefITOm9oa95Wh2rZpMSB67kMaRnz_fmM8aW8cN44LEeyu8mfKg3vnGUuYeVebOnheFylVkS9SHLkpJAkKhWnCXh85MQ_DGB7ms_HuTG9OLWwo0S8WkMwA3NU76ouAwEzv5DOUsFixSgGCyYzbGdBMrURi7ZJtF_zHacicwas0QV8jJI',
    name: 'geometric_abstract.jpg',
    date: 'December 01, 2023',
    dimensions: '1500 x 1500',
    size: '1.0 MB',
    colors: ['#BC8F8F', '#DEB887', '#F5DEB3'],
    alt: 'Icon of geometric shapes'
  },
  {
    id: '16',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBAq3N4DE7N2BE-qzKW-F4ALKQGDu2po6OeGb-gqH5sEg2ckKPADZESGA8WTHnwH2PZ-AzissoqeAxgPEzDvAhGdjmf8GMxx109aK6r7ug168gW4QNUDN0HdKjc4gwyOQf6IS2BX3rSdApyu2KKfqgUclyxOUdoVDHeC0MhSc2G2MV4sSA31Dth-rUC5tFc7Fh2SZ13IKnpsh1-wqhPnduZOOvVoh2kH6L6TB6qaMSaRLnif7edntXtfTd4rGB4gts6yPjWF8brvww',
    name: 'scribble_art.jpg',
    date: 'December 05, 2023',
    dimensions: '1200 x 1200',
    size: '0.7 MB',
    colors: ['#008080', '#F0F8FF'],
    alt: 'Icon of a scribble'
  },
  {
    id: '17',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBMxWn15lsbIE8FMRGbk-sB5BBgoTHXA43ZNFgMjqB-i-cjveq6ZM66EKZ0luYX0FC9FwGnkntRWXz7-IfnUo-8zmn9y9pN4Zt0Wft3WhtiC_nOsLHNGGNVtXFvTkjO8rWjweVSMLOm_Fc6FcKHP0hlQF9wy7svTgsn3ylWlYgIvvEG7rnz7QyMLSE58LN8XH2f9FynebTIGAVLtVhR8Hl61gRyX3EaG9JT9Oksc-BHaYAzuVn4x5nilssdwLnBIan-9S9z9N_kAk',
    name: 'pear_illustration.jpg',
    date: 'December 10, 2023',
    dimensions: '1000 x 1000',
    size: '0.4 MB',
    colors: ['#F0E68C', '#2F4F4F'],
    alt: 'Icon of a pear'
  },
  {
    id: '18',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdS33nYXZVxd3_QCX4apv21qGY4B7Vyp2nmbJVS_RyV1Puvagpz3KZEfH6dhv1iNKlFccSRpiv4f0CQDjsVVSOJqGCf1mqJFfRjyjGf11A5yN2GEKVa9s1rmo2UHTK1ii3_y301rtCzOp7uViqCKUNSAyTHT1xKiMq3ENMli4XbPS8BAsHOKp-DqCeKPmevkiYkuk3M6AGCO2ipuyL6bVC3LRcb4pOsPNGMY4lIs1_idsDdcOQx_Rk6aQTodvHBZZw8_zbGTkuoiQ',
    name: 'dog_head.jpg',
    date: 'December 15, 2023',
    dimensions: '1500 x 1500',
    size: '1.3 MB',
    colors: ['#8B4513', '#F5F5DC', '#000000'],
    alt: 'Icon of a dog'
  },
  {
    id: '19',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBydBTveMk-wj91ebOu4HQiXT_WOBYSjwF50oQSu56xLy3r9uWBJgb9UaqLOMDnXQO-j0Z60oHYcux9k7kBY9nZ7rkYbFEmLcaR7GdjZrFyYE0cBGGw2b-5jEMZ0n5QZNXJb_nJ3hbtsCyzDuhqxOPr6mwM1Am9MtuCuJsaJQVgK11nJMUD9pJ1PWLa_l112Nj1ocy8Ato4o0K1GeOM-DGsRueScHRwCc3ekZl8w02SeyinZDNdd9-0trSd4WkknWQJNFRuGX9GI9g',
    name: 'flower_minimal.jpg',
    date: 'December 20, 2023',
    dimensions: '1200 x 1200',
    size: '0.6 MB',
    colors: ['#FFB6C1', '#228B22', '#FFFFFF'],
    alt: 'Icon of a flower'
  }
];

const ALBUMS = [
  { id: 'all', name: 'All Photos', icon: ImageIcon },
  { id: 'album1', name: 'Album 01', icon: FolderOpen },
  { id: 'album2', name: 'Album 02', icon: FolderOpen },
  { id: 'album3', name: 'Album 03', icon: FolderOpen },
  { id: 'squirrels', name: 'Squirrels', icon: Trees },
  { id: 'acorns', name: 'Acorns', icon: Trees },
  { id: 'beach', name: 'The Beach', icon: Waves },
];

export default function App() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo>(PHOTOS[3]); // Default to squirrel
  const [activeAlbum, setActiveAlbum] = useState('squirrels');
  const [activeTab, setActiveTab] = useState('details');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPhotos = PHOTOS.filter(photo => 
    photo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    photo.alt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-6">
          <h1 className="text-xl font-bold text-gray-900 mb-6 tracking-tight">Photo Library</h1>
          
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-100 border-transparent rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-blue-500 transition-all outline-none"
            />
          </div>

          <nav className="space-y-1">
            {ALBUMS.map((album) => (
              <button
                key={album.id}
                onClick={() => setActiveAlbum(album.id)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeAlbum === album.id 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <album.icon className={`w-4 h-4 ${activeAlbum === album.id ? 'text-blue-600' : 'text-gray-400'}`} />
                {album.name}
              </button>
            ))}
          </nav>
        </div>
        
        <div className="mt-auto p-6 border-t border-gray-100">
          <div className="flex items-center gap-3 px-3 py-2 text-sm text-gray-500">
            <Cloud className="w-4 h-4" />
            <span>Storage: 45% used</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex overflow-hidden">
        {/* Grid Area */}
        <section className="flex-1 flex flex-col min-w-0">
          <header className="h-16 border-b border-gray-200 flex items-center justify-between px-6 bg-white shrink-0">
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-gray-900">
                {ALBUMS.find(a => a.id === activeAlbum)?.name}
              </span>
              <span className="text-xs text-gray-400 font-medium">({filteredPhotos.length} items)</span>
            </div>
            
            <div className="flex items-center gap-1">
              <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                <List className="w-4 h-4" />
              </button>
              <button className="p-2 text-blue-600 bg-blue-50 rounded-lg transition-colors">
                <Grid3X3 className="w-4 h-4" />
              </button>
            </div>
          </header>

          <div className="flex-1 overflow-y-auto p-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {filteredPhotos.map((photo) => (
                <motion.div
                  key={photo.id}
                  layoutId={`photo-${photo.id}`}
                  onClick={() => setSelectedPhoto(photo)}
                  className={`relative aspect-square rounded-xl overflow-hidden cursor-pointer group transition-all duration-200 ${
                    selectedPhoto.id === photo.id 
                      ? 'ring-4 ring-blue-500 ring-offset-2 scale-95 shadow-lg' 
                      : 'hover:scale-[1.02] shadow-sm hover:shadow-md'
                  }`}
                >
                  <img 
                    src={photo.url} 
                    alt={photo.alt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </motion.div>
              ))}
              
              {/* Placeholders for visual balance as seen in the mockup */}
              {[...Array(5)].map((_, i) => (
                <div key={`placeholder-${i}`} className="aspect-square rounded-xl bg-gray-200/50 animate-pulse" />
              ))}
            </div>
          </div>
        </section>

        {/* Detail Sidebar */}
        <aside className="w-96 bg-white border-l border-gray-200 flex flex-col shrink-0">
          <div className="p-6 overflow-y-auto flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedPhoto.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-6"
              >
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
                  <img 
                    src={selectedPhoto.url} 
                    alt={selectedPhoto.alt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex border-b border-gray-100">
                    {[
                      { id: 'details', label: 'Details', icon: Info },
                      { id: 'content', label: 'Content', icon: FileText },
                      { id: 'colors', label: 'Colors', icon: Palette },
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex-1 py-3 text-sm font-medium transition-all relative ${
                          activeTab === tab.id ? 'text-blue-600' : 'text-gray-400 hover:text-gray-600'
                        }`}
                      >
                        <div className="flex items-center justify-center gap-2">
                          <tab.icon className="w-3.5 h-3.5" />
                          {tab.label}
                        </div>
                        {activeTab === tab.id && (
                          <motion.div 
                            layoutId="activeTab"
                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" 
                          />
                        )}
                      </button>
                    ))}
                  </div>

                  <div className="py-2">
                    {activeTab === 'details' && (
                      <div className="space-y-4">
                        <DetailItem label="File Name" value={selectedPhoto.name} />
                        <DetailItem label="Date Taken" value={selectedPhoto.date} />
                        <DetailItem label="Dimensions" value={selectedPhoto.dimensions} />
                        <DetailItem label="Size" value={selectedPhoto.size} />
                      </div>
                    )}
                    
                    {activeTab === 'colors' && (
                      <div className="space-y-4">
                        <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Dominant Colors</h4>
                        <div className="flex flex-wrap gap-3">
                          {selectedPhoto.colors.map((color, i) => (
                            <div key={i} className="group relative">
                              <div 
                                className="w-10 h-10 rounded-full border border-gray-100 shadow-sm cursor-help transition-transform hover:scale-110" 
                                style={{ backgroundColor: color }}
                              />
                              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                {color}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {activeTab === 'content' && (
                      <div className="space-y-4">
                        <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">AI Analysis</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          This image appears to be a {selectedPhoto.alt.toLowerCase()}. 
                          The composition features clean lines and a balanced color palette.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {['Nature', 'Minimal', 'Vector', 'Icon'].map(tag => (
                            <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-[10px] font-bold rounded uppercase tracking-wide">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="p-6 border-t border-gray-100 bg-gray-50/50">
            <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold shadow-lg shadow-blue-200 transition-all active:scale-95">
              Edit Photo
            </button>
          </div>
        </aside>
      </main>
    </div>
  );
}

function DetailItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="space-y-1">
      <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{label}</h4>
      <p className="text-sm text-gray-900 font-medium">{value}</p>
    </div>
  );
}
