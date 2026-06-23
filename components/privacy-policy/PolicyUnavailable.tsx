type Props = {
  title: string;
};

export default function PolicyUnavailable({ title }: Props) {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-16">
      <p className="max-w-xl text-center text-base font-medium text-[#344054]">
        {title} data is not available right now. Please try again later.
      </p>
    </div>
  );
}
