package ca.sgstp.dafa.bombe;

import ca.sgstp.dafa.bombe.configuration.ConfigSpring;
import ca.sgstp.dafa.bombe.configuration.gpio.GpioConfig;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.ApplicationContext;

@SpringBootApplication(scanBasePackageClasses = ConfigSpring.class)
public class BombeApplication extends SpringBootServletInitializer {
    public static void main(String[] args) {
        ApplicationContext context = SpringApplication.run(BombeApplication.class, args);
        context.getBean(GpioConfig.class).config();
    }
}
