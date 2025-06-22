import Footer from "../organisms/footer";
import Header from "../organisms/header";

export default function PageTemplateLayout({
  children
}:{
  children: React.ReactNode;
}){
  return (
   <>
   <Header/>
      <main className="min-h-[150vh]">
        {children}
      </main>
   <Footer/>
   </>
  )
}