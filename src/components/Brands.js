// src/app/components/Brands.js

// Bu bileşen interaktif olmadığı için 'use client' gerekmez.
export default function Brands() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
            Bize Güvenen Markalardan Bazıları (Çok Yakında)
          </h2>
          <div className="mx-auto mt-10 grid grid-cols-4 items-center gap-x-8 gap-y-10 sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:grid-cols-5">
            {/* Henüz müşterin olmadığı için, sektördeki bilinen otellerin
                logolarını gri tonlamalı olarak yer tutucu (placeholder)
                niyetiyle ekleyebiliriz. Bu, bölümün nasıl görüneceğini gösterir. */}
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 opacity-40"
              src="https://placehold.co/158x48/000000/FFFFFF?text=Otel+Logosu+1"
              alt="Placeholder Marka 1"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 opacity-40"
              src="https://placehold.co/158x48/000000/FFFFFF?text=Otel+Logosu+2"
              alt="Placeholder Marka 2"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 opacity-40"
              src="https://placehold.co/158x48/000000/FFFFFF?text=Otel+Logosu+3"
              alt="Placeholder Marka 3"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1 opacity-40"
              src="https://placehold.co/158x48/000000/FFFFFF?text=Acente+Logosu"
              alt="Placeholder Marka 4"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1 opacity-40"
              src="https://placehold.co/158x48/000000/FFFFFF?text=Otel+Logosu+4"
              alt="Placeholder Marka 5"
              width={158}
              height={48}
            />
          </div>
        </div>
      </div>
    </div>
  );
}