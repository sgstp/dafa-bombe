package ca.sgstp.stel.apis.commun.resultat;

import lombok.AllArgsConstructor;
import lombok.Builder;

@AllArgsConstructor
@Builder(builderClassName = "Builder", toBuilder = true)
public class ResultatAction {
    public final Boolean succes;
}
