package ca.sgstp.stel.commun;

import java.sql.Timestamp;
import java.time.Clock;
import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.OffsetDateTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.Date;

public final class DateUtils {

    private static final ThreadLocal<Clock> CLOCK_THREAD = new ThreadLocal<>();

    /**
     * Obtient l'horloge à utiliser en tenant compte d'une surcharge pour le thread courant.
     * <p>
     * <p>Retourne par défaut l'horloge par défaut de la JVM.
     *
     * @return l'horloge à utiliser
     */
    public static Clock clock() {
        Clock clockThreadCourant = CLOCK_THREAD.get();
        return clockThreadCourant != null ? clockThreadCourant : Clock.systemDefaultZone();
    }

    /**
     * Détermine si l'horloge courante (système ou thread) a été redéfinie.
     *
     * @return {@code true} si l'horloge courante a été redéfinie, sinon {@code false}
     */
    public static boolean isClockRedefinie() {
        return !clock().equals(Clock.systemDefaultZone());
    }

    /**
     * Détermine si l'horloge du thread a été redéfinie.
     *
     * @return {@code true} si l'horloge du thread a été redéfinie, sinon {@code false}
     */
    public static boolean isClockThreadRedefinie() {
        return DateUtils.CLOCK_THREAD.get() != null;
    }

    /**
     * Réinitialise l'horloge du thread pour utiliser celle du système.
     */
    public static void resetClockThread() {
        DateUtils.CLOCK_THREAD.remove();
    }

    /**
     * @return true si l'instant courant est surchargé.
     */
    public static boolean isInstantCourantSurcharge() {
        return isClockThreadRedefinie();
    }

    /**
     * @return l'instant courant.
     */
    public static Instant instantCourant() {
        return Instant.now(clock());
    }

    /**
     * @return l'instant courant en object {@link java.sql.Date}
     */
    public static ZonedDateTime instantCourantZonedDateTime() {
        return toZonedDateTime(instantCourant());
    }

    public static void retirerSurcharge() {
        resetClockThread();
    }

    /**
     * Converti un objet représentant une date en {@link Date}.
     * <p>
     * <p>Supporte les types {@link Date}, {@link Timestamp}, {@link Instant}, {@link LocalDate}, {@link LocalDateTime}, {@link OffsetDateTime}
     * et {@link ZonedDateTime}.
     *
     * @param objet l'objet à convertir, peut être {@code null}
     * @return l'instant correspondant à la date
     * @throws IllegalArgumentException si objet n'est pas d'un type supporté
     */
    public static Date toDate(Object objet) {
        if (objet == null) {
            return null;
        }

        if (objet instanceof Date) {
            return (Date) objet;
        }

        if (objet instanceof Instant) {
            return Date.from((Instant) objet);
        }

        if (objet instanceof LocalDate) {
            return Date.from(((LocalDate) objet).atStartOfDay(ZoneId.systemDefault()).toInstant());
        }

        if (objet instanceof LocalDateTime) {
            return Date.from(((LocalDateTime) objet).atZone(ZoneId.systemDefault()).toInstant());
        }

        if (objet instanceof OffsetDateTime) {
            return Date.from(((OffsetDateTime) objet).toInstant());
        }

        if (objet instanceof ZonedDateTime) {
            return Date.from(((ZonedDateTime) objet).toInstant());
        }

        throw exceptionConversionImpossible(objet, Date.class);
    }

    /**
     * Converti une date en {@link LocalDateTime} dans le fuseau horaire par défaut
     * vers une date en {@link Date} représentant l'instant correspondant à la date
     * dans un fuseau horaire donné.
     * <p>
     * <p> Si le fuseau horaire est absent, la date est retournée dans le fuseau horaire
     * par défaut.
     *
     * @param date          la date à convertir
     * @param fuseauHoraire le fuseau horaire cible
     * @return l'instant correspondant à la date dans un fuseau horaire donné
     */
    public static Date toDate(LocalDateTime date, String fuseauHoraire) {
        if (date == null) {
            return null;
        }

        if (fuseauHoraire == null) {
            return toDate(date);
        }

        return Date.from(date.atZone(ZoneId.of(fuseauHoraire)).toInstant());
    }

    /**
     * Converti un objet représentant une date en {@link Instant}.
     * <p>
     * <p>Supporte les types {@link Date}, {@link Timestamp}, {@link Instant}, {@link LocalDate}, {@link LocalDateTime}, {@link OffsetDateTime}
     * et {@link ZonedDateTime}.
     *
     * @param objet l'objet à convertir, peut être {@code null}
     * @return l'instant correspondant à la date
     * @throws IllegalArgumentException si objet n'est pas d'un type supporté
     */
    public static Instant toInstant(Object objet) {
        if (objet == null) {
            return null;
        }

        if (objet instanceof Date) {
            //On ne peut utiliser la méthode toInstant() car elle lance une UnsupportedOperationException
            //pour le type java.sql.date qui dérive java.util.date.
            return Instant.ofEpochMilli(((Date) objet).getTime());
        }

        if (objet instanceof Instant) {
            return (Instant) objet;
        }

        if (objet instanceof LocalDate) {
            return Instant.from(((LocalDate) objet).atStartOfDay(ZoneId.systemDefault()));
        }

        if (objet instanceof LocalDateTime) {
            return Instant.from(((LocalDateTime) objet).atZone(ZoneId.systemDefault()));
        }

        if (objet instanceof OffsetDateTime) {
            return ((OffsetDateTime) objet).toInstant();
        }

        if (objet instanceof ZonedDateTime) {
            return ((ZonedDateTime) objet).toInstant();
        }

        throw exceptionConversionImpossible(objet, Instant.class);
    }

    /**
     * Converti un objet représentant une date en {@link LocalDate}.
     * <p>
     * <p>Supporte les types {@link Date}, {@link Timestamp}, {@link Instant}, {@link LocalDate}, {@link LocalDateTime}, {@link OffsetDateTime}
     * et {@link ZonedDateTime}.
     *
     * @param objet l'objet à convertir, peut être {@code null}
     * @return l'instant correspondant à la date
     * @throws IllegalArgumentException si objet n'est pas d'un type supporté
     */
    public static LocalDate toLocalDate(Object objet) {
        if (objet == null) {
            return null;
        }

        if (objet instanceof Date) {
            //On ne peut utiliser la méthode toInstant() car elle lance une UnsupportedOperationException
            //pour le type java.sql.date qui dérive java.util.date.
            return LocalDate.from(Instant.ofEpochMilli(((Date) objet).getTime()).atZone(ZoneId.systemDefault()));
        }

        if (objet instanceof Instant) {
            return LocalDate.from(((Instant) objet).atZone(ZoneId.systemDefault()));
        }

        if (objet instanceof LocalDate) {
            return (LocalDate) objet;
        }

        if (objet instanceof LocalDateTime) {
            return ((LocalDateTime) objet).toLocalDate();
        }

        if (objet instanceof OffsetDateTime) {
            return ((OffsetDateTime) objet).toZonedDateTime().withZoneSameInstant(ZoneId.systemDefault()).toLocalDate();
        }

        if (objet instanceof ZonedDateTime) {
            return ((ZonedDateTime) objet).withZoneSameInstant(ZoneId.systemDefault()).toLocalDate();
        }

        throw exceptionConversionImpossible(objet, LocalDate.class);
    }

    /**
     * Converti un objet représentant une date en {@link LocalDateTime}.
     * <p>
     * <p>Supporte les types {@link Date}, {@link Timestamp}, {@link Instant}, {@link LocalDate}, {@link LocalDateTime}, {@link OffsetDateTime}
     * et {@link ZonedDateTime}.
     *
     * @param objet l'objet à convertir, peut être {@code null}
     * @return l'instant correspondant à la date
     * @throws IllegalArgumentException si objet n'est pas d'un type supporté
     */
    public static LocalDateTime toLocalDateTime(Object objet) {
        if (objet == null) {
            return null;
        }

        if (objet instanceof Date) {
            //On ne peut utiliser la méthode toInstant() car elle lance une UnsupportedOperationException
            //pour le type java.sql.date qui dérive java.util.date.
            return LocalDateTime.ofInstant(Instant.ofEpochMilli(((Date) objet).getTime()), ZoneId.systemDefault());
        }

        if (objet instanceof Instant) {
            return LocalDateTime.ofInstant(((Instant) objet), ZoneId.systemDefault());
        }

        if (objet instanceof LocalDate) {
            return ((LocalDate) objet).atStartOfDay();
        }

        if (objet instanceof LocalDateTime) {
            return (LocalDateTime) objet;
        }

        if (objet instanceof OffsetDateTime) {
            return ((OffsetDateTime) objet).atZoneSameInstant(ZoneId.systemDefault()).toLocalDateTime();
        }

        if (objet instanceof ZonedDateTime) {
            return ((ZonedDateTime) objet).withZoneSameInstant(ZoneId.systemDefault()).toLocalDateTime();
        }

        throw exceptionConversionImpossible(objet, LocalDateTime.class);
    }

    /**
     * Converti un objet représentant une date en {@link OffsetDateTime}.
     * <p>
     * <p>Supporte les types {@link Date}, {@link Timestamp}, {@link Instant}, {@link LocalDate}, {@link LocalDateTime}, {@link OffsetDateTime}
     * et {@link ZonedDateTime}.
     *
     * @param objet l'objet à convertir, peut être {@code null}
     * @return l'instant correspondant à la date
     * @throws IllegalArgumentException si objet n'est pas d'un type supporté
     */
    public static OffsetDateTime toOffsetDateTime(Object objet) {
        if (objet == null) {
            return null;
        }

        if (objet instanceof Date) {
            //On ne peut utiliser la méthode toInstant() car elle lance une UnsupportedOperationException
            //pour le type java.sql.date qui dérive java.util.date.
            return OffsetDateTime.ofInstant(Instant.ofEpochMilli(((Date) objet).getTime()), ZoneId.systemDefault());
        }

        if (objet instanceof Instant) {
            return OffsetDateTime.ofInstant((Instant) objet, ZoneId.systemDefault());
        }

        if (objet instanceof LocalDate) {
            return ((LocalDate) objet).atStartOfDay(ZoneId.systemDefault()).toOffsetDateTime();
        }

        if (objet instanceof LocalDateTime) {
            return ((LocalDateTime) objet).atZone(ZoneId.systemDefault()).toOffsetDateTime();
        }

        if (objet instanceof OffsetDateTime) {
            return (OffsetDateTime) objet;
        }

        if (objet instanceof ZonedDateTime) {
            return ((ZonedDateTime) objet).toOffsetDateTime();
        }

        throw exceptionConversionImpossible(objet, OffsetDateTime.class);
    }

    /**
     * Converti un objet représentant une date en {@link ZonedDateTime}.
     * <p>
     * <p>Supporte les types {@link Date}, {@link Timestamp}, {@link Instant}, {@link LocalDate}, {@link LocalDateTime}, {@link OffsetDateTime}
     * et {@link ZonedDateTime}.
     *
     * @param objet l'objet à convertir, peut être {@code null}
     * @return l'instant correspondant à la date
     * @throws IllegalArgumentException si objet n'est pas d'un type supporté
     */
    public static ZonedDateTime toZonedDateTime(Object objet) {
        if (objet == null) {
            return null;
        }

        if (objet instanceof Date) {
            //On ne peut utiliser la méthode toInstant() car elle lance une UnsupportedOperationException
            //pour le type java.sql.date qui dérive java.util.date.
            return ZonedDateTime.ofInstant(Instant.ofEpochMilli(((Date) objet).getTime()), ZoneId.systemDefault());
        }

        if (objet instanceof Instant) {
            return ZonedDateTime.ofInstant((Instant) objet, ZoneId.systemDefault());
        }

        if (objet instanceof LocalDate) {
            return ((LocalDate) objet).atStartOfDay(ZoneId.systemDefault());
        }

        if (objet instanceof LocalDateTime) {
            return ((LocalDateTime) objet).atZone(ZoneId.systemDefault());
        }

        if (objet instanceof OffsetDateTime) {
            return ((OffsetDateTime) objet).atZoneSameInstant(ZoneId.systemDefault());
        }

        if (objet instanceof ZonedDateTime) {
            return (ZonedDateTime) objet;
        }

        throw exceptionConversionImpossible(objet, ZonedDateTime.class);
    }

    /**
     * @return l'instant courant en object {@link java.sql.Date}
     */
    public static java.sql.Date instantCourantToDateSql() {
        return new java.sql.Date(instantCourant().toEpochMilli());
    }

    /**
     * Comparer deux dates données tout en gérant le cas du null lors de la comparaison
     *
     * @param date1 une date fixée par l'usager
     * @param date2 une date fixée par l'usager
     * @return le résultat de vérification que la date1 est bien avant la date2.
     */
    public static boolean verifierDateUnAvantDateDeux(ZonedDateTime date1, ZonedDateTime date2) {
        return (date1 == null || date2 == null) ? false : date1.isBefore(date2);
    }

    /**
     * Obtenir un {@link ZonedDateTime} à partir des millisecondes depuis l'epoch.
     *
     * @param epochMilli Les millisecondes depuis l'epoch.
     * @return Le temps converti dans la zone par défaut du système.
     */
    public static ZonedDateTime zonedDateTimeFromEpochMilli(final long epochMilli) {
        return ZonedDateTime.ofInstant(Instant.ofEpochMilli(epochMilli), ZoneId.systemDefault());
    }

    private static IllegalArgumentException exceptionConversionImpossible(Object objetSource, Class<?> typeDemande) {
        return new IllegalArgumentException("L'objet de type '" + objetSource.getClass() + "' ne peut pas être converti en '" + typeDemande + "'.");
    }

    private DateUtils() {}
}
