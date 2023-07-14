
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList,  } from '@/components/ui/navigation-menu';

export default function NavigationBar(){
    return (
    <>
      <section className='flex justify-between text-black'>
        <div className='flex mt-3 ml-8'>
            <img src="/assets/logo1.svg" alt="Logo Wa.ve" className="w-full h-10"/>
            <a href="/" className='font-bold text-4xl'>Wa.ve</a>
        </div>
        <div className='mt-6 mr-8'>
        <NavigationMenu>
          <NavigationMenuList>    
            <NavigationMenuItem>
              <NavigationMenuLink>
                <a href="/" className="rounded-md hover:bg-gradient-to-b from-muted/50 to-muted p-4 "> Home</a>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink>
                <a href="/" className="rounded-md hover:bg-gradient-to-b from-muted/50 to-muted p-4 " >Contato</a>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink>
                <a href="/"className="rounded-md hover:bg-gradient-to-b from-muted/50 to-muted p-4 " >Nosso Trabalho</a>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        </div>
      </section>
        <div className='mt-4'>
          <div className="bg-black h-px w-full"></div>
        </div>
    </>
      
  )
}