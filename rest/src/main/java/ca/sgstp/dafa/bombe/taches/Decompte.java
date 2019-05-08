package ca.sgstp.dafa.bombe.taches;

import ca.sgstp.dafa.bombe.services.etat.Etat;
import lombok.AllArgsConstructor;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@AllArgsConstructor
@Component
public class Decompte {

    private final Etat etat;

    @Scheduled(fixedRate = 200)
    public void reduireCompteur() {
        if (
            etat.getDecompteEnCours() && (
                etat.getDecompteAccelere() ||
                (System.currentTimeMillis() - etat.getDernierMiseAJour() > 1000)
            )
        ) {
            etat.setSecondeRestante(etat.getSecondeRestante() - 1);
            etat.setDernierMiseAJour(System.currentTimeMillis());
        }
    }
}
