// SocialLinks.tsx - Updated with proper title section
import { motion } from "framer-motion";
import { styles } from "../../constants/styles";
import { fadeIn, textVariant } from "../../utils/motion";

import { config as appConfig } from "../../constants/config";

interface SocialCardProps {
  index: number;
  name: string;
  url: string;
  icon: string;
}

const SocialCard = ({ index, name, url, icon }: SocialCardProps) => {
  // Define colors for each social platform
  const getIconColor = (platformName: string) => {
    switch (platformName.toLowerCase()) {
      case 'linkedin':
         return 'brightness-0 saturate-100 invert-[1]';// LinkedIn blue
      case 'github':
        return 'brightness-0 saturate-100 invert-[1]'; // White
      case 'behance':
        return 'brightness-0 saturate-100 invert-[1]'; // Behance blue
      case 'dribbble':
        return 'brightness-0 saturate-100 invert-[1]'; // Dribbble pink
      default:
        return 'brightness-0 saturate-100 invert-[0.6]'; // Default gray
    }
  };

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      variants={fadeIn("", "spring", index * 0.3, 0.75)}
      className="bg-black-200 flex w-[240px] flex-col items-center justify-center gap-4 rounded-3xl p-6 transition hover:scale-105"
    >
      <img 
        src={icon} 
        alt={name} 
        className={`h-12 w-12 object-contain transition-all duration-300 ${getIconColor(name)}`}
        onError={(e) => {
          console.log(`Failed to load icon for ${name}:`, icon);
          e.currentTarget.style.display = 'none';
        }}
      />
      <p className="text-white text-lg font-semibold">{name}</p>
    </motion.a>
  );
};

const SocialLinks = () => {
  // Debug: Check if config is loaded
  console.log("Config loaded:", appConfig);
  console.log("Social links config:", appConfig?.sections?.sociallinks);

  // Fallback social links data
  const socialLinksData = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/abbinaya-sri-s-725244259/",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg",
    },
    {
      name: "GitHub",
      url: "https://github.com/Abbinayasri",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg",
    },
    {
      name: "Behance",
      url: "https://www.behance.net/abbinayasris24",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/behance.svg",
    },
    {
      name: "Dribbble",
      url: "https://dribbble.com/abbinaya_sri",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/dribbble.svg",
    },
  ];

  // Safety check for config
  const socialConfig = appConfig?.sections?.sociallinks || {
    h2: "Social Profiles",
    p: "CONNECT WITH ME",
    content: "Explore my social profiles and Connect with me."
  };

  try {
    return (
      <div className="mt-20">
        {/* Title Section - Similar to Projects section */}
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} text-center`}>
            {socialConfig.p}
          </p>
          <h2 className={`${styles.sectionHeadText} text-center`}>
            Social Profiles.
          </h2>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-center mx-auto"
        >
          {socialConfig.content}
        </motion.p>

        {/* Social Cards */}
        <div className="mt-20 flex flex-wrap gap-7 justify-center">
          {socialLinksData.map((link, index) => (
            <SocialCard key={link.name} index={index} {...link} />
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error rendering SocialLinks:", error);
    return (
      <div className="bg-red-100 p-4 rounded-lg">
        <h2 className="text-red-800 font-bold">Error Loading Social Links</h2>
        <p className="text-red-600">Check console for details</p>
      </div>
    );
  }
};

export default SocialLinks;