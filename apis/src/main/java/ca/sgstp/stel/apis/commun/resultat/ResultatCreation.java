package ca.sgstp.stel.apis.commun.resultat;

import lombok.Builder;

@Builder(builderClassName = "Builder")
public class ResultatCreation<T> {
    public final T ressource;
}
