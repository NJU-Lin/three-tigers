import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by 361pa on 2017/5/28.
 */
@RestController
@EnableAutoConfiguration
@RequestMapping("/testboot")
public class TestBoot {
    @RequestMapping("getuser")
    public User getUser() {
        User user = new User();
        user.setName("test");
        return user;
    }

}
