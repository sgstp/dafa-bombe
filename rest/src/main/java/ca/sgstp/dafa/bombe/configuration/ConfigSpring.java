package ca.sgstp.dafa.bombe.configuration;

import ca.sgstp.dafa.bombe.filtres.FiltreCORS;
import ca.sgstp.dafa.bombe.services.etat.ServiceEtat;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.databind.MapperFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import org.glassfish.jersey.server.ResourceConfig;
import org.glassfish.jersey.servlet.ServletProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.scheduling.annotation.EnableScheduling;

@Configuration
@EnableScheduling
@ComponentScan(basePackages = {"ca.sgstp.dafa.bombe.services", "ca.sgstp.dafa.bombe.taches"})
public class ConfigSpring {

    @Bean
    @Primary
    public ObjectMapper objectMapper() {
        ObjectMapper o = new ObjectMapper();
        o.setSerializationInclusion(JsonInclude.Include.NON_NULL);
        o.disable(MapperFeature.INFER_PROPERTY_MUTATORS);
        o.disable(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS);
        o.registerModule(new JavaTimeModule());
        return o;
    }


    @Bean
    public ResourceConfig resourceConfig() {
        return new ResourceConfig() {
            {
//                packages("ca.sgstp.dafa.bombe.services");
                register(ServiceEtat.class);

                register(FiltreCORS.class, 1000);

                property(ServletProperties.FILTER_FORWARD_ON_404, true);
            }
        };
    }
}
