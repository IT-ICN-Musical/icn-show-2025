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
          <TableHead>Chest</TableHead>
          <TableHead>Sleeve</TableHead>
          <TableHead>Height (cm)</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>M</TableCell>
          <TableCell>64</TableCell>
          <TableCell>54</TableCell>
          <TableCell>71</TableCell>
          <TableCell>150-155</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>L</TableCell>
          <TableCell>66</TableCell>
          <TableCell>56</TableCell>
          <TableCell>73</TableCell>
          <TableCell>155-160</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>XL</TableCell>
          <TableCell>68</TableCell>
          <TableCell>58</TableCell>
          <TableCell>75</TableCell>
          <TableCell>160-165</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>2XL</TableCell>
          <TableCell>70</TableCell>
          <TableCell>60</TableCell>
          <TableCell>77</TableCell>
          <TableCell>166-170</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>3XL</TableCell>
          <TableCell>72</TableCell>
          <TableCell>62</TableCell>
          <TableCell>79</TableCell>
          <TableCell>170-175</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>4XL</TableCell>
          <TableCell>74</TableCell>
          <TableCell>64</TableCell>
          <TableCell>81</TableCell>
          <TableCell>175-180</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
