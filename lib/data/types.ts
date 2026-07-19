/**
 * Core Data Types for StadiumSense Venue Graph & Operations Telemetry
 * Enforces strict typing across seeded JSON loaders and UI components.
 */

export interface VenueNode {
  id: string;
  name: string;
  category: 'gate' | 'seating_zone' | 'restroom' | 'sensory_room' | 'concourse' | 'transit_hub';
  level: number;
  accessible: boolean;
  coordinates: { x: number; y: number }; // SVG map percentage coordinates (0-100)
  description?: string;
}

export interface VenueEdge {
  source: string;
  target: string;
  distanceMeters: number;
  stepFree: boolean;
  instructions: string;
}

export interface VenueGraph {
  stadiumName: string;
  tournamentEvent: string;
  nodes: VenueNode[];
  edges: VenueEdge[];
}

export interface CrowdZoneTelemetry {
  zoneId: string;
  zoneName: string;
  currentOccupancyPct: number;
  flowRatePerMin: number;
  riskStatus: 'low' | 'moderate' | 'high' | 'critical';
  recommendedMitigation?: string;
}

export interface TransitLineStatus {
  lineId: string;
  lineName: string;
  type: 'subway' | 'bus' | 'shuttle' | 'rail';
  status: 'normal' | 'delayed' | 'heavy_congestion';
  nextDepartureMins: number[];
  congestionLevelPct: number;
}

export interface SustainabilityMetrics {
  timestamp: string;
  waterUsageLiters: number;
  waterTargetLiters: number;
  energyUsageKwh: number;
  solarOffsetPct: number;
  wasteDivertedPct: number;
  compostKg: number;
}

export interface OpsIncidentLog {
  id: string;
  timestamp: string;
  category: 'crowd' | 'medical' | 'accessibility' | 'transit' | 'facility';
  location: string;
  summary: string;
  status: 'active' | 'mitigated' | 'resolved';
}

export interface OpsFeed {
  lastUpdated: string;
  matchInfo: {
    eventTitle: string;
    kickoffTime: string;
    expectedAttendance: number;
    currentWeather: string;
  };
  crowdZones: CrowdZoneTelemetry[];
  transitLines: TransitLineStatus[];
  sustainability: SustainabilityMetrics;
  recentIncidents: OpsIncidentLog[];
}
