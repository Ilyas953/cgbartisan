import { site } from "@/lib/site";
import { PhoneIcon } from "./icons";

export default function CallButton() {
  return (
    <a
      href={site.phoneHref}
      aria-label={`Appeler ${site.name}`}
      className="btn-gold fixed bottom-[26px] right-[26px] z-50 h-[58px] w-[58px] rounded-full shadow-[0_10px_26px_rgba(0,0,0,0.4)]"
    >
      <PhoneIcon size={22} strokeWidth={1.9} />
    </a>
  );
}
