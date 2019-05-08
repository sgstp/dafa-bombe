package ca.sgstp.dafa.bombe.configuration.gpio;

import ca.sgstp.dafa.bombe.services.etat.Etat;
import com.pi4j.io.gpio.GpioController;
import com.pi4j.io.gpio.GpioFactory;
import com.pi4j.io.gpio.RaspiPin;
import com.pi4j.io.gpio.event.GpioPinDigitalStateChangeEvent;
import com.pi4j.io.gpio.event.GpioPinListenerDigital;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

@Component
@Profile("!dev")
@AllArgsConstructor
@Slf4j
public class GpioConfigRaspberry implements GpioConfig {

    private final Etat etat;

    private final GpioController gpio = GpioFactory.getInstance();

    @Override
    public void config() {
        log.info("GPIO RaspberryPi");
        GpioEcouteur ecouteur = new GpioEcouteur();
        gpio.provisionDigitalInputPin(RaspiPin.GPIO_21, "1").addListener(ecouteur); //29
        gpio.provisionDigitalInputPin(RaspiPin.GPIO_31, "2").addListener(ecouteur); //28
        gpio.provisionDigitalInputPin(RaspiPin.GPIO_08, "3").addListener(ecouteur); //3
        gpio.provisionDigitalInputPin(RaspiPin.GPIO_09, "4").addListener(ecouteur); //5
        gpio.provisionDigitalInputPin(RaspiPin.GPIO_07, "5").addListener(ecouteur); //7
    }

    public class GpioEcouteur implements GpioPinListenerDigital {
        @Override
        public void handleGpioPinDigitalStateChangeEvent(GpioPinDigitalStateChangeEvent e) {
            if (e.getState().isHigh()) {
                switch (e.getPin().getName()) {
                    case "1":
                        etat.setDecompteEnCours(true);
                        break;
                    case "2":
                        etat.setBuzzerActif(true);
                        break;
                    case "3":
                        etat.setDecompteAccelere(true);
                        break;
                    case "4":
                        etat.setDecompteAccelere(false);
                        break;
                    case "5":
                        etat.setAfficherCode(true);
                        break;
                }
            }
        }
    }
}
