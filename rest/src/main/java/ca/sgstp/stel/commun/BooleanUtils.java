package ca.sgstp.stel.commun;

import java.util.Objects;

public final class BooleanUtils {
    public static Boolean negatif(Boolean val) {
        if (Objects.isNull(val)) {
            return null;
        }
        return !val;
    }

    private BooleanUtils() {}
}
