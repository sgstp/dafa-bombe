package ca.sgstp.stel.apis.commun;

import java.util.Collections;
import java.util.List;
import java.util.Objects;

public final class ListeUtils {
    public static <T> List<T> toListeNonModifiable(List<T> liste) {
        return Objects.isNull(liste) ? null : Collections.unmodifiableList(liste);
    }

    private ListeUtils() {}
}
