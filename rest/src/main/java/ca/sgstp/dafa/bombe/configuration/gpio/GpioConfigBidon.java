package ca.sgstp.dafa.bombe.configuration.gpio;

import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

@Component
@Profile("dev")
@Slf4j
public class GpioConfigBidon implements GpioConfig {
    @Override
    public void config() {
        log.info("GPIO Bidon");
    }
}
