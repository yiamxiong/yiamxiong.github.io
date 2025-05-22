-- Query 1: Price Difference per Flight for Passenger 13
SELECT
p.firstName,
p.lastName,
mp.FlightID,
mp.SeatPrice,
sq.AvgSeatPrice,
ROUND(mp.SeatPrice - sq.AvgSeatPrice, 2) AS Diff
FROM
Passenger AS p
INNER JOIN ManifestPassenger AS mp USING (PassID)
INNER JOIN
(
SELECT
PassID,
ROUND(AVG(SeatPrice), 2) AS AvgSeatPrice
FROM
ManifestPassenger
WHERE PassID = 13
) AS sq USING (PassID)
ORDER BY FlightID;

-- Query 2: Reservations by Drone ID (2021–2022 Q4)
SELECT *
FROM FlightReservation
WHERE YEAR(PickUpTime) = 2021 AND DroneID = 1
UNION
SELECT *
FROM FlightReservation
WHERE YEAR(PickUpTime) = 2022 AND MONTH(PickUpTime) BETWEEN 10 AND 12 AND DroneID = 10
ORDER BY DroneID, PickUpTime;

-- Query 3: Avg Cost per Mile for Yuneec Drone Models (Completed Flights)
SELECT DroneID, ROUND(AVG(CostPerMile), 2) AS TotalDistance
FROM FlightReservation AS fr
INNER JOIN (
  SELECT Brand, TypeID
  FROM Model
  WHERE Brand = "Yuneec"
) AS m ON fr.TypeID = m.TypeID
WHERE StatusID = 5
GROUP BY DroneID
ORDER BY TotalDistance DESC;

-- Query 4: Group Type 1 Flights – February 2023
SELECT FlightID, PickUpTime, CostPerMile
FROM FlightReservation
  INNER JOIN ManifestPassenger AS mp USING (FlightID)
  INNER JOIN Passenger AS p USING (PassID)
  INNER JOIN PassGroup as pg ON p.PassID = pg.OwnerID
  INNER JOIN (
SELECT *
FROM PassGroupType
WHERE GroupTypeID = 1
) AS pgt USING (GroupTypeID)
WHERE YEAR(PickUpTime) = 2023 AND MONTH(PickUpTime) = 2
GROUP BY FlightID
ORDER BY FlightID;

-- Query 5: Avg Flight Duration by Year (StatusID = 5)
SELECT YEAR(PickUpTime) AS Year, COUNT(FlightID) AS NumFlights, ROUND(AVG(TIMESTAMPDIFF(MINUTE,PickUpTime, ActDropOffTime)), 2) AS AvgDuration
FROM FlightReservation
WHERE StatusID = 5
GROUP BY Year
ORDER BY AvgDuration DESC;

-- Query 6: Flight Count by Flight Type – April 2023
SELECT TypeID AS FlightType, Description, COUNT(FlightID) AS NumFlights
FROM FlightReservation
    INNER JOIN FlightType USING (TypeID)
WHERE YEAR(PickUpTime) = 2023 AND MONTH(PickUpTime) = 4
GROUP BY TypeID;

-- Query 7: Group Summary by Group Type
SELECT pgt.GroupTypeID, pgt.Description, COUNT(DISTINCT pg.GroupID) AS NumGroups, COUNT(pgt.GroupTypeID) AS NumPassengers
FROM Passenger AS p
INNER JOIN PassGroupMember AS pgm USING (PassID)
INNER JOIN PassGroup AS pg USING (GroupID)
INNER JOIN PassGroupType AS pgt USING (GroupTypeID)
GROUP BY GroupTypeID;