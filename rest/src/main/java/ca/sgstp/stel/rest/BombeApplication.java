package ca.sgstp.stel.rest;

import ca.sgstp.stel.rest.configuration.ConfigSpring;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication(scanBasePackageClasses = ConfigSpring.class)
public class BombeApplication extends SpringBootServletInitializer {

    public static void main(String[] args) {
        SpringApplication.run(BombeApplication.class, args);
    }

    //Mettre en commentaire pour JAR et retirer le extends SpringBootServletInitializer
    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(BombeApplication.class);
    }
}
