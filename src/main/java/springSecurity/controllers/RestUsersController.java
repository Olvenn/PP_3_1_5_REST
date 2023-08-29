package springSecurity.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import springSecurity.models.User;
import springSecurity.service.UserServiceImp;

import java.security.Principal;

@RestController
@RequestMapping("/api")
public class RestUsersController {

    private UserServiceImp userService;

    @Autowired
    public RestUsersController(UserServiceImp userService) {

        this.userService = userService;
    }

    @GetMapping("/user")
    public ResponseEntity<User> showUser(Principal principal) {
//        model.addAttribute("user",
//                userService.findByUsername(principal.getName()));
        return new ResponseEntity<>(userService.findByUsername(principal.getName()), HttpStatus.OK);
    }

    @GetMapping("/user1")
    public User showUser1(Principal principal) {
//        model.addAttribute("user",
//                userService.findByUsername(principal.getName()));
        return userService.findByUsername(principal.getName());
    }

//    @GetMapping()
//    public User showUserInfo(Principal principal) {
////        model.addAttribute("user",
////                userService.findByUsername(principal.getName()));
////        return new ResponseEntity<>(userService.findByUsername(principal.getName()), HttpStatus.OK);
//        return userService.findByUsername(principal.getName());
//    }

    @GetMapping("/test")
    public String sayHello() {
        return "Hello world!";
    }


}
