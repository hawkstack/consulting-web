type ClientOutcomePillProps = {
  text: string;
};

export default function ClientOutcomePill({ text }: ClientOutcomePillProps) {
  return (
    <li className="rounded-[14px] border border-[#E1E8F3] bg-[#F7FAFD] px-4 py-3 text-[11px] leading-[1.45] text-[#31435D] shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] md:px-5 md:py-[14px] md:text-[16px] lg:text-[16px] xl:text-[14px]">
      {text}
    </li>
  );
}
