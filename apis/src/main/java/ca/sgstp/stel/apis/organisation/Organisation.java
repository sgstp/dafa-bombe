package ca.sgstp.stel.apis.organisation;

import lombok.Builder;

@Builder(builderClassName = "Builder")
public class Organisation {
    public final String nom;
    public final String langue;
}
