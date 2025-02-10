import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function SizeChart() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Size (cm)</TableHead>
          <TableHead>Length (cm)</TableHead>
          <TableHead>Chest (cm)</TableHead>
          <TableHead>Shoulder</TableHead>
          <TableHead>Sleeve</TableHead>
          <TableHead>Height (cm)</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>2XS</TableCell>
          <TableCell>60.5</TableCell>
          <TableCell>43</TableCell>
          <TableCell>35.5</TableCell>
          <TableCell>17.5</TableCell>
          <TableCell>145-150</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>XS</TableCell>
          <TableCell>63.5</TableCell>
          <TableCell>45</TableCell>
          <TableCell>38</TableCell>
          <TableCell>19</TableCell>
          <TableCell>150-155</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>S</TableCell>
          <TableCell>66</TableCell>
          <TableCell>48</TableCell>
          <TableCell>40.5</TableCell>
          <TableCell>20</TableCell>
          <TableCell>155-160</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>M</TableCell>
          <TableCell>68.5</TableCell>
          <TableCell>50</TableCell>
          <TableCell>43</TableCell>
          <TableCell>21.5</TableCell>
          <TableCell>160-165</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>L</TableCell>
          <TableCell>71</TableCell>
          <TableCell>53</TableCell>
          <TableCell>45.5</TableCell>
          <TableCell>22.5</TableCell>
          <TableCell>165-170</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>XL</TableCell>
          <TableCell>73.5</TableCell>
          <TableCell>55</TableCell>
          <TableCell>48</TableCell>
          <TableCell>24</TableCell>
          <TableCell>170-175</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>2XL</TableCell>
          <TableCell>76</TableCell>
          <TableCell>58</TableCell>
          <TableCell>50.5</TableCell>
          <TableCell>25</TableCell>
          <TableCell>175-180</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>3XL</TableCell>
          <TableCell>78.5</TableCell>
          <TableCell>60</TableCell>
          <TableCell>53</TableCell>
          <TableCell>26.5</TableCell>
          <TableCell>180-185</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
