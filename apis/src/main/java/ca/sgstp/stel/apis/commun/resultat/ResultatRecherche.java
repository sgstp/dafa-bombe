package ca.sgstp.stel.apis.commun.resultat;

import ca.sgstp.stel.apis.commun.ListeUtils;
import lombok.Builder;

import java.util.List;

@Builder(builderClassName = "Builder")
public class ResultatRecherche<T> {
    public final List<T> ressource;

    public ResultatRecherche(List<T> ressource) {
        this.ressource = ListeUtils.toListeNonModifiable(ressource);
    }
}
