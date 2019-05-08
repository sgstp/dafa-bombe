package ca.sgstp.dafa.bombe;

import ca.sgstp.dafa.bombe.configuration.ConfigSpring;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication(scanBasePackageClasses = ConfigSpring.class)
public class BombeApplication extends SpringBootServletInitializer {
    public static void main(String[] args) {
        SpringApplication.run(BombeApplication.class, args);
    }
}
