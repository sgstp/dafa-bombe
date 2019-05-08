package ca.sgstp.dafa.bombe.services.etat;

import lombok.Data;
import org.springframework.stereotype.Component;

@Component
@Data
public class Etat {
    private Long dernierMiseAJour = System.currentTimeMillis();
    private Integer secondeRestante = 5 * 60;
    private Boolean decompteAccelere = false;
    private Boolean decompteEnCours = false;
    private Boolean buzzerActif = false;
}
