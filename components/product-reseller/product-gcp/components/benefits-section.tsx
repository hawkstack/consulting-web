// import { ProductGcpBenefitsContent } from "../types/product-gcp";

// type ProductGcpBenefitsSectionProps = {
//   content: ProductGcpBenefitsContent;
// };

// export default function ProductGcpBenefitsSection({
//   content,
// }: ProductGcpBenefitsSectionProps) {
//   return (
//     <section className="px-5 py-10 sm:px-8 lg:px-10">
//       <div className="mx-auto max-w-[1200px]">
//         <div className="mb-8 text-center">
//           <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
//             {content.title}
//           </h2>
//           <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600">
//             {content.description}
//           </p>
//         </div>

//         <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
//           {content.benefits.map((benefit) => (
//             <article
//               key={benefit.title}
//               className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
//             >
//               <h3 className="text-lg font-semibold text-slate-900">
//                 {benefit.title}
//               </h3>
//               <p className="mt-3 text-sm leading-6 text-slate-600">
//                 {benefit.description}
//               </p>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
