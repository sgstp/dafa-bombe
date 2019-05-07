package ca.sgstp.stel.rest.configuration;

import ca.sgstp.stel.rest.filtres.FiltreCORS;
import ca.sgstp.stel.rest.filtres.FiltreResultat;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.databind.MapperFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import org.glassfish.jersey.server.ResourceConfig;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@Configuration
@ComponentScan(basePackages = "ca.sgstp.stel.services")
@EnableJpaRepositories(basePackages = "ca.sgstp.stel.services")
@EntityScan(basePackages = "ca.sgstp.stel.services")
public class ConfigSpring {

    // public static final String NOM_CACHE_CONFIGURATION = "configuration";


    /* Remplacer la configuration par defaut de SpringBoot */
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
                packages("ca.sgstp.stel.apis");

                register(FiltreCORS.class, 1000);

                register(FiltreResultat.class, 1003);

//                property(ServletProperties.FILTER_FORWARD_ON_404, true);
            }
        };
    }
}
