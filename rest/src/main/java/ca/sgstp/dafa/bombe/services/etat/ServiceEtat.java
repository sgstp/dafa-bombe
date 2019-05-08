package ca.sgstp.dafa.bombe.services.etat;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("etat")
@Component
@AllArgsConstructor
public class ServiceEtat {

    private final Etat etat;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Etat getEtat() {
        return etat;
    }

    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    public void setEtat(Etat etat) {
        this.etat.setBuzzerActif(etat.getBuzzerActif());
        this.etat.setDecompteAccelere(etat.getDecompteAccelere());
        this.etat.setDecompteEnCours(etat.getDecompteEnCours());
        this.etat.setDesarmer(etat.getDesarmer());
        this.etat.setAfficherCode(etat.getAfficherCode());

        this.etat.setSecondeRestante(etat.getSecondeRestante());
    }
}
