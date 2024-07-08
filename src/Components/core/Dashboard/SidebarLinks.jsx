import { matchPath } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import * as Icons from "react-icons/vsc" ;
function SidebarLink({link , iconName}){
     const Icon = Icons[iconName]
     const location = useLocation();
     function matchRoute(route){
        return matchPath({path:route} , location.pathname);
     }
    return(
  
   <NavLink
      to={link.path}
      className={`relative px-8 py-2 text-sm font-medium ${
        matchRoute(link.path)
          ? "bg-richblack-700 text-blue-200"
          : "bg-opacity-0 text-richblack-300"
      } transition-all duration-200`}
    >
       <span
        className={`absolute left-0 top-0 h-full w-[0.15rem] bg-richblue-500 ${
          matchRoute(link.path) ? "opacity-100" : "opacity-0"
        }`}
      ></span>
      <div className="flex items-center gap-x-2">
        {/* Icon Goes Here */}
        <Icon className="text-lg" /> 
        <span>{link.name}</span>
      </div>
    </NavLink>
    );
}

export  default SidebarLink;