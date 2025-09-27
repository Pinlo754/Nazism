import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { FaLanguage } from "react-icons/fa";

interface LanguageDropdownProps {
  size?: "open" | "close";
}

function LanguageDropdown({ size = "open" }: LanguageDropdownProps) {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState("vi");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const languages = [
    { code: "vi", label: "Tiếng Việt" },
    { code: "en", label: "English" },
    { code: "jp", label: "日本語" },
  ];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <div ref={dropdownRef} className="relative font-montserrat">
      {/* Nút mở dropdown */}
      <div
        className={`flex items-center px-2 py-2 mt-3 rounded-md cursor-pointer hover:bg-white-active/30 ${
          size === "open" ? "gap-4" : "justify-center gap-1"          
        }
        `}
        onClick={() => setOpen(!open)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <FaLanguage className="text-fs20" />
        {size === "open" ? (
          <span className={`leading-fs14 font-semibold text-indigo-7 ${hovered ? "text-fs14" : "text-fs12"}`}>
            {languages.find((l) => l.code === language)?.label}
          </span>
        ) : (
          <span className={`leading-fs14 uppercase font-semibold text-indigo-7 ${hovered ? "text-fs14" : "text-fs12"}`}>
            {language}
          </span>
        )}
      </div>

      {/* Menu thả xuống */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: -6,
              width: size === "open" ? "9rem" : "4rrem",
            }}
            animate={{
              opacity: 1,
              y: 0,
              width: size === "open" ? "9rem" : "4rem",
            }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 bottom-8 mt-2 bg-white border border-white-active/20 rounded-lg shadow-md z-20"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  setOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 text-sm hover:bg-gray-200 ${
                  language === lang.code
                    ? "text-indigo-7 font-semibold"
                    : "text-gray-700"
                }`}
              >
                {size === "open" ? (
                  lang.label
                ) : (
                  <span className="uppercase">{lang.code}</span>
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default LanguageDropdown;
