package ca.sgstp.stel.commun;

public final class StringUtils {
    public static String toSnakeCase(String str) {
        String regex = "([A-Z][a-z_]+)";
        String replacement = "$1_";
        String a = str.replaceAll(regex, replacement).toUpperCase();
        return a.substring(0, a.length() - 1);
    }

    private StringUtils() {}
}
