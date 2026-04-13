import ActivityFeed from "./ActivityFeed";
import ChartSection from "./ChartSection";
import StatsGrids from "./StatsGrids";
import TableSection from "./TableSection";

function DashBorad() {
  return (
    <div className="space-y-6">
      {/* Stats Grids */}
      <StatsGrids />
      {/* Charts Sections */}
      <ChartSection />

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2">
          <TableSection />
        </div>
        <div>
          <ActivityFeed />
        </div>
      </div>
    </div>
  );
}

export default DashBorad;
