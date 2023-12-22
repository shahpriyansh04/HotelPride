import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { CardHeader, CardContent, Card } from "@/components/ui/card";

export default function Location() {
  return (
    <div className="h-screen">
      <div className="flex flex-col h-full b g-black justify-center items-center w-full px-24 py-6 gap-6">
        <div className="w-full h-full">
          <h1 className="text-3xl font-semibold text-center my-6">Location</h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120610.48788268886!2d72.78555399726562!3d19.148073800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b86e528cb077%3A0x1f221447c0a2ee0a!2sHotel%20Pride!5e0!3m2!1sen!2sin!4v1703154195617!5m2!1sen!2sin"
            width="100%"
            height="05"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="w-full">
          <Card>
            <CardHeader>
              <h1 className="text-3xl font-semibold text-center">
                What's Nearby
              </h1>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Location</TableHead>
                    <TableHead>Distance (km)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">
                      Bhandup Railway Station
                    </TableCell>
                    <TableCell>1</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Neptune Magnet Mall
                    </TableCell>
                    <TableCell>1</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">R-City Mall</TableCell>
                    <TableCell>6</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Powai</TableCell>
                    <TableCell>6</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Airport </TableCell>
                    <TableCell>15</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
